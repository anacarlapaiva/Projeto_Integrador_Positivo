import { RFValue } from "react-native-responsive-fontsize";
import RNPickerSelect from "react-native-picker-select";
import styled from "styled-components/native";

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

export const Form = styled.View`
  flex: 1;
`;
export const Fields = styled.View``;

export const ContentButton = styled.View`
  width: 100%;
`;

export const ContentListagem = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Select = styled(RNPickerSelect)`
  display: flex;
  width: 90%;
  border-bottom-color: ${({ theme }) => theme.colors.border_location};
  border-bottom-width: 2px;
  border-top-color: ${({ theme }) => theme.colors.border_location};
  border-top-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.border_location};
  border-left-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.border_location};
  border-right-width: 2px;
`;
