import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderElement = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(70)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const UserImg = styled.Image`
  width: ${RFPercentage(7)}px;
  height: ${RFPercentage(7)}px;
`;

export const Comeback = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  align-items: center;
`;

