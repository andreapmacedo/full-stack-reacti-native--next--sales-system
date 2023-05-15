import { TextInputProps, View } from "react-native";
import React from "react";
import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import Text from "../text/Text";
import { textTypes } from "../text/textTypes";
import  { ContainerInput, IconEye } from "./input.style";

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({margin, secureTextEntry, title, errorMessage, ...props}: InputProps) => {

  const [currentSecure, setCurrentSecure] = React.useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    // setCurrentSecure(!currentSecure);
    setCurrentSecure(() => !currentSecure);
  };




  return (
    <DisplayFlexColumn customMargin={margin} >
      { title && 
        (<Text
          margin="0px 0px 4px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD} 
          color={theme.colors.grayTheme.gray100}
        >
            {title}
        </Text>) 
      }
        <View>
          <ContainerInput
            hasSecureTextEntry={secureTextEntry}
            secureTextEntry={currentSecure}
            isError={!!errorMessage}
            {...props}
          />
          {secureTextEntry &&
            <IconEye
              size={24}
              name={currentSecure ? "eye" : "eye-blocked"}
              onPress={handleOnPressEye}
            />
          }
        </View>
      { errorMessage &&
        <Text
          margin="0px 0px 0px 8px"
          type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
          color={theme.colors.orangeTheme.orange80}>
          {errorMessage}
        </Text>
      }
    </DisplayFlexColumn>);
};

export default Input;
