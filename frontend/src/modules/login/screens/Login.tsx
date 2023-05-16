import React, { useState } from "react";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/Input";
import axios from "axios";
import { NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import { theme } from "../../../shared/themes/theme";

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleOnPress = async () => {
    console.log('clicou');
    // const returnID = await axios.get('http://192.168.0.15:8080/correios/59020660');
    setLoading(true);
    const resultAxios = await axios.post('http://192.168.0.15:8080/auth', {
      email,
      password,
    }).catch(() => {
      console.log('erro');
      setErrorMessage('Email ou senha inválidos');
    });
    setLoading(false);
    console.log(resultAxios);  
  };

  const handleOnChangeEmail = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  
  const handleOnChangePassword = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };



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
          margin="16px"
          title="ENTRAR"
          loading={loading}
          onPress={handleOnPress}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
