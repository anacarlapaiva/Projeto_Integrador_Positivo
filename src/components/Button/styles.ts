import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";

interface IProps {
  disabledStyle?: boolean;
}

export const Container = styled(RectButton)<IProps>`
  width: 100%;
  height: ${RFValue(54)}px;
  background-color: transparent;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(16)}px;
`;
