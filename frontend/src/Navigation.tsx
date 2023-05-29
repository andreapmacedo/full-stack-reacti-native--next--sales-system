import {NavigationContainer} from '@react-navigation/native';
import { MenuUrl } from './shared/enums/MenuUrl.enum';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./modules/home/screens/Home";
import Login from "./modules/login";
import Splash from './modules/splash';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={MenuUrl.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          // name="Login"
          name={MenuUrl.LOGIN}
          component={Login}
        />
          <Stack.Screen
            name={MenuUrl.HOME}
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default Navigation;