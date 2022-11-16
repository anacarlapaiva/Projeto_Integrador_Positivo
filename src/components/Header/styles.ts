import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 18px;
`;

export const HeaderElement = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${RFValue(70)}px;
`;

export const Name = styled.Text`
    color: ${({theme}) => theme.colors.primary};
`;


export const Comeback = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  align-items: center;
  margin-left: ${RFValue(10)}%;
`;

