import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #ffffff;
  padding-horizontal: 24px;
`;

export const CategoriesContainerTitle = styled.View`
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const CategoriesText = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoriesContainer = styled.View`
  margin-right: 15px;
`;

export const HorizontalList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const TopView = styled.View`
  background: #95eaff;
  width: 265px;
  height: 290px;
  border-radius: 16px;
  padding-top: 12px;
  padding-bottom: 50px;
`;

export const ContentContainer = styled.View`
  padding: 16px;
  flex-direction: row;
`;

export const TextView = styled.View``;

export const Description = styled.View`
  padding-top: 12px;
`;

export const WhiteContainer = styled.View`
  width: 90px;
  height: 40px;
  background: white;
  border-radius: 20px;
  margin-top: 6px;
  margin-bottom: 4px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-horizontal: 5px;
`;

export const ImageContainer = styled.View`
  margin-top: 45px;
`;

export const BigImage = styled.View``;
