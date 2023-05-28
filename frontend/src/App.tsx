import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Login from "./modules/login";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import GlobalModal from "./shared/components/modal/GlobalModal/GlobalModal";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./modules/home/screens/Home";

const Stack = createNativeStackNavigator();


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <GlobalModal />
      {/* <SafeAreaView> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
            <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Login /> */}
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
