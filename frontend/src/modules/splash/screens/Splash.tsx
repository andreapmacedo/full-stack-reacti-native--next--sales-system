import { useEffect } from "react";
import { ContainerSplash, ImagelogoSplash } from "./styles/splash.style";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { useRequest } from "../../../shared/hooks/useRequest";
import { useUserReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { getAuthorizationToken } from "../../../shared/functions/connection/auth";
import { UserType } from "../../../shared/types/userType";
import { URL_USER } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../shared/enums/mehtods.enum";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

const Splash = () => {
  
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { request } = useRequest();
  const { setUser } = useUserReducer();

  useEffect(() => {
    const verifyLogin = async () => {
      const returnUser = await request({
        url: URL_USER,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });
      
      if (returnUser) {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: MenuUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);


  return (
    <ContainerSplash>
      <ImagelogoSplash
        source={require('../../../assets/images/logo.png')}/>

    </ContainerSplash>
  );

};

export default Splash;