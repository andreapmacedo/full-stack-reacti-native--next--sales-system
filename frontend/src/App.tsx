import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Login from "./modules/login";
import { useState } from "react";
// import Modal from "./shared/components/modal/Modal";
// import Button from "./shared/components/button/Button";


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      {/* <Modal
        onCloseModal={() => setModalVisible(false)}
        visible={modalVisible}
        text="Texto"
        title="Titulo"/>
      <Button title='open' onPress={() => setModalVisible(true)}/> */}
      <Login />
    </SafeAreaView>
  );
};

export default App;
