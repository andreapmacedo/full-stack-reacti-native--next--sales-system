import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import Login from "./modules/login";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import GlobalModal from "./shared/components/modal/GlobalModal/GlobalModal";


export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <SafeAreaView>
        <GlobalModal />
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
