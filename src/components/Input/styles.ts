import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(17)}px ${RFValue(20)}px;
  font-size: ${RFValue(14)}px;
  border-radius: 8px;
  background-color: #EDEDED;
  margin-bottom: ${RFValue(15)}px;
`;
