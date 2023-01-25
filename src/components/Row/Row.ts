import styled from 'styled-components/native';

interface IRowProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
}

export const Row = styled.View`
  flex-direction: row;
  align-items: ${({alignItems}: IRowProps) => alignItems || 'stretch'};
  justify-content: ${({justifyContent}: IRowProps) =>
    justifyContent || 'flex-start'};
  margin: ${({margin}: IRowProps) => margin || '0'};
  padding: ${({padding}: IRowProps) => padding || '0'}px;
  width: ${({width}: IRowProps) => width || 'auto'};
  height: ${({height}: IRowProps) => height || 'auto'};
  ${({border}: IRowProps) => border && `border: ${border}`};
  ${({borderRadius}: IRowProps) =>
    borderRadius && `border-radius: ${borderRadius}`}px;
  ${({background}: IRowProps) => background && `background: ${background}`};
`;
