import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 30px;
`;

export const ContentSearch = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
  background-color: #F3F3F3;
  height:${RFValue(54)}px;
`;

export const IconSearch = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchInput = styled.TextInput`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(10)}px;
  width: 90%;
`;

export const ContentSubMenu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(23)}px;
`;

export const TitlePage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
  font-weight: bold;
`;

export const SeeAll = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.primary};
`;

