import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

import { Container, Title } from "./styles";


interface IProps extends RectButtonProps {
  title: string;
  onPress: () => void;
  disabledStyle?: boolean;
  loading?: boolean;
  titleColor?: string;
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  disabledStyle,
  loading,
  titleColor,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Container {...rest} onPress={onPress} disabledStyle={disabledStyle}>
      {loading ? (
        <ActivityIndicator color={theme.colors.background} />
      ) : (
        <Title style={{color: titleColor ? titleColor : theme.colors.background}}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
