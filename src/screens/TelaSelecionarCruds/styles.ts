import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
`;

export const ContentSubMenu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(23)}px;
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;

export const SeeAll = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Right = styled(AntDesign)`
  margin-left: ${RFValue(15)}px;
`;

export const ContentStore = styled.View`
  padding-top: ${RFValue(24)}px;
  padding-bottom: ${RFValue(24)}px;
  border-bottom-color: ${({ theme }) => theme.colors.border_location};
  border-bottom-width: 2px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ButtonOptions = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentSelect = styled.View`
  flex-direction: row;
`;
export const ContainerFunctions = styled.View`
  flex-direction: row;
`;

export const ContentAdd = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContentList = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ContentOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TextList = styled.Text`
  margin-top: ${RFValue(15)}px;
  font-size: ${RFValue(17)}px;
`;
