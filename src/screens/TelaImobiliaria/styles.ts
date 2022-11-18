import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 30px;
`;

export const ContentListImage = styled.View`
  margin-top: ${RFValue(20)}px;
  flex-direction: column;
  flex: 1;
`;

export const ViewBox = styled.View`
  width: 100%;
`;

export const Box = styled.Image`
  width: 100%;
  border-radius: ${RFValue(10)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  margin-top: ${RFValue(12)}px;
`;

export const SubDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #595959;
  margin-top: ${RFValue(12)}px;

`;
