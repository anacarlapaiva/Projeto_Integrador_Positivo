import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
`;

export const ContentSearch = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
  background-color: #f3f3f3;
  height: ${RFValue(54)}px;
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
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
`;

export const SeeAll = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentListImage = styled.View`
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
`;

export const ViewBox = styled.View`
  flex-direction: column;
  flex-basis: 50%;
`;

export const Box = styled.Image`
width: 95%;
`;

export const TextBottom = styled.Text`
  color: #928f8f;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
`;
