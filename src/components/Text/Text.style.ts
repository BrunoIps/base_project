import styled from 'styled-components/native';
import variables from '@mobile/config/variables';
import {dimensionsService} from '@mobile/utils/dimensions';

interface ITextStyle {
  fontSize?: number;
  color?: string;
  weight?: '400' | '500' | '600' | '700';
  lineHeight?: string;
  width?: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecoration?: 'none' | 'underline';
}

export const Text = styled.Text`
  font-size: ${({fontSize}: ITextStyle) =>
    dimensionsService.fontScale(fontSize ?? 16)}px;
  color: ${({color}: ITextStyle) => (color ? color : 'black')};
  line-height: ${({lineHeight}: ITextStyle) => lineHeight ?? '20'}px;
  font-family: ${({weight}: ITextStyle) =>
    weight ? variables[`Inter-${weight}`] : variables['Inter-500']};
  ${({textAlign}: ITextStyle) => textAlign && `text-align: ${textAlign}`}
  ${({width}: ITextStyle) => width && `width: ${width}`};
  ${({textDecoration}: ITextStyle) =>
    textDecoration && `text-decoration: ${textDecoration}`};
  text-align: ${({textAlign}: ITextStyle) => textAlign || 'left'};
  text-decoration: ${({textDecoration}: ITextStyle) =>
    textDecoration || 'none'};
`;
