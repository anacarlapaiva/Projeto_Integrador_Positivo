import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 30px;
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
  color: ${({ theme }) => theme.colors.primary};
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
`;

