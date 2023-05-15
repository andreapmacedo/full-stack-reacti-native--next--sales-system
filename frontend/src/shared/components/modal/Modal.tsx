import { Alert, ModalProps as ModalPropsReact ,Modal as ModalReact, Pressable, View } from 'react-native';
import { ContainerModal, IconCloseModal } from './modal.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';
import { textTypes } from '../text/textTypes';
import Button from '../button/Button';

interface ModalProps extends ModalPropsReact{
  title: string;
  text: string;
  onCloseModal: () => void;
}


const Modal = ({title, text, onCloseModal, ...props}: ModalProps) => {
  
  return (
    
    <ModalReact
      animationType="slide"
      transparent={true}
      onRequestClose = {() => {
        Alert.alert('Modal has been closed.');  
        onCloseModal();
      }}
      {...props}
    >
      <ContainerModal >
        <Text 
          type={textTypes.BUTTON_SEMI_BOLD}
          color={theme.colors.mainTheme.primary}
          margin='16px'
        >
          {title}
        </Text>
        <Text>{text}</Text>
        <Button title="Ok" onPress={() => onCloseModal()} />
         <IconCloseModal
          size={12}
          name="cross"
          onPress={() => onCloseModal()}
        />
        {/* <IconCloseModal
          size={12}
          name="cross"
          onPress={() => onCloseModal()}
        />
        <View >
          <Text>{title}</Text>
          <Text>{text}</Text>
          <Pressable
            onPress={() => onCloseModal()}>
            <Text>Hide Modal</Text>
          </Pressable>
        </View> */}
      </ContainerModal>
    </ModalReact>
    
  );
};


export default Modal;