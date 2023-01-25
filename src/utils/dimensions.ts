import {Dimensions} from 'react-native';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const {width, height} = Dimensions.get('window');

const dimensionsService = {
  widthScale: (size: number) => width * size,
  heightScale: (size: number) => height * size,
  fontScale: (size: number) => size * (width / BASE_WIDTH),
  horizontalScale: (size: number) => (width / BASE_WIDTH) * size,
  verticalScale: (size: number) => (height / BASE_HEIGHT) * size,
  moderateScale: (size: number, factor = 0.5) =>
    size + (dimensionsService.horizontalScale(size) - size) * factor,
};

// const {widthScale, heightScale, fontScale} = dimensionsService;

export {dimensionsService};
