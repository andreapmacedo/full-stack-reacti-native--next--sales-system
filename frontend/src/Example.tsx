import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface ExampleProps {
  text?: string;
  children?: String;
  textChange?: string;
}

// const Example = (props: ExampleProps) => {
const Example = ({children, text, textChange: newPropName}: ExampleProps) => {

  const [newText, setnewText] = useState<string>('oia');

  const handleOnPress = () => {
    setnewText('novo texto');
    console.log('Clicou');
  };

  // useEffect(() => {
  //   console.log('Componente montado');
  // });
  // useEffect(() => {
  //   console.log('Componente montado');
  // }, []);
  useEffect(() => {
    console.log('Componente montado');
  }, [newText]);

  return (
    <View>
      {/* <Text style={{color: 'blue'}} >{newPropName}</Text> */}
      {/* <Text style={{color: 'red'}} >{props.children}</Text>
      <Text style={{color: 'green'}} >{props.text}</Text> */}
      <Text style={{color: 'red'}} >{children}</Text>
      <Text style={{color: 'green'}} >{text}</Text>
      <Text style={{color: 'blue'}} >{newPropName || text}</Text>
      <Text style={{color: 'purple'}} >{newText}</Text>
      <Button title="Clique aqui" onPress={handleOnPress} />
    </View>
  );
};

export default Example;
