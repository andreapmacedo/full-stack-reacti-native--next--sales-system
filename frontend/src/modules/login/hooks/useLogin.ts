import { useState } from 'react';
import axios from 'axios';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';


export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleOnPress = async () => {
    console.log('clicou');
    // const returnID = await axios.get('http://192.168.0.15:8080/correios/59020660');
    setLoading(true);
    // const resultAxios = await axios.post('http://192.168.0.15:8080/auth', {
    await connectionAPIPost('http://192.168.0.15:8080/auth', {
      email,
      password,
    }).catch(() => {
      console.log('erro');
      setErrorMessage('Email ou senha inválidos');
    });
    setLoading(false);
  };

  const handleOnChangeEmail = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  
  const handleOnChangePassword = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};