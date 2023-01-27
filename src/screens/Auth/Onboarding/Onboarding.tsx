import React, {useRef, useState} from 'react';
import Elastic from '@mobile/assets/onboarding.png';

import * as S from './styles';
import {Animated, Dimensions, ImageSourcePropType} from 'react-native';
import {Text} from '@mobile/components/Text/Text.style';
import NavigationService from '@mobile/utils/navigation';
import {dimensionsService} from '@mobile/utils/dimensions';

interface IOnboarding {
  image: ImageSourcePropType;
  id: number | string;
}

const MyOnboarding = () => {
  const data: IOnboarding[] = [
    {
      id: 1,
      image: Elastic,
    },
    {
      id: 2,
      image: Elastic,
    },
    {
      id: 3,
      image: Elastic,
    },
  ];
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const GoToNextPage = () => {
    if (currentIndex < data.length - 1) {
      slidesRef?.current.scrollToIndex({index: currentIndex + 1});
    } else {
      NavigationService.navigate('Welcome');
    }
  };

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <S.Container>
      <S.HorizontalList
        bounces={false}
        pagingEnabled
        data={data}
        keyExtractor={item => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        scrollEventThrottle={32}
        ref={slidesRef}
        viewabilityConfig={viewConfig}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item}) => (
          <S.ItemContainer width={width}>
            <S.Image source={item.image} width={width} />
          </S.ItemContainer>
        )}
      />
      <S.Paginator>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWith = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <S.Dot
              style={{width: dotWith, opacity: opacity}}
              key={index.toString()}
            />
          );
        })}
      </S.Paginator>
      <S.SkipOnboardingContainer>
        <S.Button onPress={() => NavigationService.navigate('Login')}>
          <Text
            fontSize={dimensionsService.fontScale(16)}
            color="white"
            weight="700">
            Pular
          </Text>
        </S.Button>
      </S.SkipOnboardingContainer>
      {currentIndex === data.length - 1 ? (
        <S.Button onPress={GoToNextPage}>
          <S.ExitOnboardingContainer>
            <Text
              fontSize={dimensionsService.fontScale(16)}
              color="white"
              weight="700">
              Próximo
            </Text>
          </S.ExitOnboardingContainer>
        </S.Button>
      ) : (
        <S.NextContainer>
          <S.NexButton onPress={GoToNextPage}>
            <S.NextIcon />
          </S.NexButton>
        </S.NextContainer>
      )}
    </S.Container>
  );
};

export default MyOnboarding;
