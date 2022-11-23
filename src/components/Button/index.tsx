import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button as ButtonNative, ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";
interface IProps extends RectButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const Button: React.FC<IProps> = ({
  title,
  onPress,
  loading,
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
