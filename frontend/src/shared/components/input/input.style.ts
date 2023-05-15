import { theme } from '../../themes/theme';
import styled from 'styled-components/native';
import { Icon } from "../icon/Icon";

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}


export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  border: 1px solid;
  border-radius: 4px;
  color: ${theme.colors.neutralTheme.black};
  border-color: ${(props) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.neutralTheme.white};
  background-color: ${theme.colors.neutralTheme.white};
  padding-right: ${(props) => props.hasSecureTextEntry ? '48px' : '16px'};
`;
  // border-color: ${theme.colors.grayTheme.gray80};

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

