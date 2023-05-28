import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
// import { UserType } from '../types/userType';
import { RequestLogin } from './../types/requestLogin';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { setUserAction } from '../../store/reducers/userReducer';



export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
    
  
  const dispatch = useDispatch();


  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    const x = await connectionAPIPost<ReturnLogin>('http://192.168.0.15:8080/auth', body)
      .then((result) => {
        dispatch(setUserAction(result.user));
        // setUser(result.user);
      })
      .catch(() => {
      console.log('erro');
      setErrorMessage('Email ou senha inválidos');
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
