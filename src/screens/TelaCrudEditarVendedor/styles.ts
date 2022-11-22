import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 30px;
  border-radius: 8px;
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
  margin-top: 50px;
`;

export const SeeAll = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 50px;
`;

export const Form = styled.View`
    flex: 1;
`
export const Fields = styled.View``;

export const ContentButton = styled.View`
    width: 100%;
`;

