import {NavigationContainer} from '@react-navigation/native';
import Home from "./modules/home/screens/Home";
import Login from "./modules/login";


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MenuUrl } from './shared/enums/MenuUrl.enum';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          // name="Login"
          name={MenuUrl.LOGIN}
          component={Login}
        />
          <Stack.Screen name={MenuUrl.HOME} component={Home} options={{title: 'Home'}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default Navigation;