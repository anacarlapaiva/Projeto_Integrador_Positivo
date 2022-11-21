import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ContentModal = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ModalElement = styled.View`
  background-color: #a7c6da;
  padding: ${RFValue(20)}px;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

export const ButtonElement = styled.Button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;

export const Vector = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.primary};
`;

