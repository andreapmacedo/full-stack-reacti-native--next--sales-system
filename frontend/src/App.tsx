import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Login from "./modules/login";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <SafeAreaView>

      
        {/* <Modal
          onCloseModal={() => setModalVisible(false)}
          visible={modalVisible}
          text="Texto"
          title="Titulo"/>
        <Button title='open' onPress={() => setModalVisible(true)}/> */}
      <Login />
    </SafeAreaView>
    </Provider>
  );
};

export default App;
