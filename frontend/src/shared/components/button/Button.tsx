import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonSecondary, GradientButton, ActivityIndicatorButton, ButtonDisabled } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';

// import LinearGradient from 'react-native-linear-gradient';


interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({title, type, loading, disabled, margin, onPress, ...props}: ButtonProps) => {

  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      <Text type={textTypes.BUTTON_SEMI_BOLD} color={color}>
        {title}
      </Text>
      {loading && <ActivityIndicatorButton color={theme.colors.neutralTheme.white}/>}
    </>
  );

  if (disabled) {
    return (
      <ButtonDisabled {...props} margin={margin} >
        {renderText(theme.colors.neutralTheme.white)}
      </ButtonDisabled>
    );
  };

  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ButtonSecondary {...props} margin={margin} onPress={handleOnPress} >
          {renderText(theme.colors.mainTheme.primary)}
          {/* <Text type={textTypes.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>{title}</Text> */}
        </ButtonSecondary>
      );
    default:
      return (
        <ButtonContainer {...props} margin={margin} onPress={handleOnPress}>
          <GradientButton
            start={{x: 0, y: 0}}
            end={{x: 1.0, y: 1.0}}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralTheme.white)}
            {/* <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>
              {title}
            </Text> */}
          </GradientButton>
        </ButtonContainer>
      );
  }
};

export default Button;
