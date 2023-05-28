import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { RequestLogin } from './../types/requestLogin';
import { useState } from 'react';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export const useRequest = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    navigate('Home'); // temporário
    const x = await connectionAPIPost<ReturnLogin>('http://192.168.0.15:8080/auth', body)
    .then((result) => {
      setUser(result.user);
      navigate('Home');
      })
      .catch(() => {
      // console.log('erro'); // versão 1
      // setErrorMessage('Email ou senha inválidos'); // versão 2
      setModal({ // versão 3
        visible: true,
        title: 'Erro',
        text: 'Usuário ou senha inválidos',
      });
    });
    setLoading(false);
  };

  return {
    loading,
    errorMessage,
  //   request,
    authRequest,
    setErrorMessage,
  };
};
