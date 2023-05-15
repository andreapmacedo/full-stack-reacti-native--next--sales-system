import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize?: string;
  fontFamily?: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light' | 'Poppins-SemiBold';
  customMargin?: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  ${(props) => (props.customMargin ? `margin: ${props.customMargin}` : '')};
  /* font-family: Poppins-Bold; */
  padding-top: 3px;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
`;
