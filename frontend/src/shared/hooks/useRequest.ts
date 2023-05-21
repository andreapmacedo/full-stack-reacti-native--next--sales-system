import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { UserType } from '../types/userType';
import { RequestLogin } from './../types/requestLogin';
import { useState } from 'react';



// interface requestProps<T, B = unknown> {
//   url: string;
//   method: MethodType;
//   saveGlobal?: (object: T) => void;
//   body?: B;
//   message?: string;
// }

export const useRequest = () => {
  // const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  // const { setUser } = useUserReducer();
  // const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<UserType>();

  // const request = async <T, B = unknown>({
  //   url,
  //   method,
  //   saveGlobal,
  //   body,
  //   message,
  // }: requestProps<T, B>): Promise<T | undefined> => {
  //   setLoading(true);
  //   const returnObject: T | undefined = await ConnectionAPI.connect<T, B>(url, method, body)
  //     .then((result) => {
  //       if (saveGlobal) {
  //         saveGlobal(result);
  //       }
  //       if (message) {
  //         setModal({
  //           visible: true,
  //           title: 'Sucesso!',
  //           text: message,
  //         });
  //       }
  //       return result;
  //     })
  //     .catch((error: Error) => {
  //       setModal({
  //         visible: true,
  //         title: 'Erro',
  //         text: error.message,
  //       });
  //       return undefined;
  //     });

  //   setLoading(false);
  //   return returnObject;
  // };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    const x = await connectionAPIPost<ReturnLogin>('http://192.168.0.15:8080/auth', body)
      .then((result) => {
        setUser(result.user);
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
