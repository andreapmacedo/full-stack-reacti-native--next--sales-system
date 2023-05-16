import { View } from "react-native";
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/Icon";
import axios from "axios";

const Login = () => {
  const handleOnPress = async () => {
    console.log('clicou');
    // const returnID = await axios.get('http://192.168.0.15:8080/correios/59020660');
    // console.log(returnID.data);
  };
  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          source={require('../../../assets/images/logo.png')} 
          resizeMode="center"
        />
        <Input
          margin="0px 0px 16px 0px" 
          title="email:"
          placeholder="Digite seu email"
          errorMessage="Email inválido"
        />
        <Input
          secureTextEntry 
          title="senha:"
          placeholder="Digite sua senha"
          errorMessage="senha inválida"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="Entrar"
          // loading
          onPress={handleOnPress}/>
      </ContainerLogin>
    </View>
  );
};

export default Login;
