import styled from 'styled-components/native';

interface Props {
  backgroundColor?: string;
  height?: number;
  borderRadius?: string;
}

export const Button = styled.TouchableOpacity.attrs({activeOpacity: 0.7})`
  width: 100%;
  background: ${({backgroundColor}: Props) => backgroundColor || '#05e58e'};
  height: 60px;
  border-radius: ${({borderRadius}: Props) => borderRadius || '15'}px;
  justify-content: center;
  align-items: center;
`;
