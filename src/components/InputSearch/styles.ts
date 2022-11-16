import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");


interface IPropsSearch {
  clicked?: boolean;
}

export const Container = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: ${width}px;
`;

export const ContentSearch = styled.View<IPropsSearch>`
  flex-direction: row;
  width: 87%;
  align-items: center;
  border: 1px solid #808b98;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(8)}px;
`;

export const IconSearch = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary_light};
`;

export const SearchInput = styled.TextInput`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(10)}px;
  width: 90%;
`;
