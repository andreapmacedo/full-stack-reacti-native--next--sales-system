import { SafeAreaView } from "react-native";
import styled from 'styled-components/native';
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import GlobalModal from "./shared/components/modal/GlobalModal/GlobalModal";
import Navigation from "./Navigation";

export const NewText = styled.Text`
  font-size: 20px;
  color: red;
`;

const App = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <GlobalModal />
      {/* <SafeAreaView> */}
        <Navigation />
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
