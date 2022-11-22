import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
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

export const HR = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.border_location};
  border-bottom-width: 2px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-top: ${RFValue(15)}px;
`;

export const TextList = styled.Text`
  margin-top: ${RFValue(5)}px;
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.description};
`;

export const ContentTop = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(15)}px;
  flex-direction: row;
`;
