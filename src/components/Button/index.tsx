import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button as ButtonNative, ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

import { StyledButton } from "./styles";

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
    <>
      {loading ? (
        <ActivityIndicator color={theme.colors.background} />
      ) : (
        <ButtonNative {...rest} title={title} onPress={onPress} />
      )}
    </>
  );
};

export default Button;
