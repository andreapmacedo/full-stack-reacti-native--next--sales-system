import { useCallback, useState } from "react";
import { Button, View } from "react-native/types";

const Test = () => {
  const [name, setName] = useState('andre');
  const [lastName, setLastName] = useState('macedo');

  const handleChangeName = useCallback(() => {
    setName(`novo nome ${lastName}`);
  }, [lastName]);

  const handleChangeLastName = () => {
    setLastName('novo sobrenome');
  };

  return (
    <View>
      <Button title="Change name" onPress={handleChangeName} />
      <Button title="Change last name" onPress={handleChangeLastName} />
    </View>
  );
};

export default Test;
