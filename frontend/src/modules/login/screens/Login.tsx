import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import { useLogin } from "../hooks/useLogin";
import { View } from "react-native";
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import { theme } from "../../../shared/themes/theme";
// import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
// import { getAuthorizationToken } from "../../../shared/functions/connection/auth";

const Login = () => {

  // const navigation = useNavigation();
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword, } = useLogin();


  // useEffect(() => {
  //   const test = async () => {
  //     const token = await getAuthorizationToken();
  //     if (token) {
  //       navigation.navigate(MenuUrl.HOME);
  //     }
  //   }
  //   test();
  // }, []);


  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          source={require('../../../assets/images/logo.png')} 
          resizeMode="center"
        />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 16px 0px" 
          placeholder="Digite seu email"
          title="Email:"
          onChange={handleOnChangeEmail}
        />
        <Input
          value={password}
          errorMessage={errorMessage}
          secureTextEntry 
          title="senha:"
          placeholder="Digite sua senha"
          onChange={handleOnChangePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          loading={loading}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
