import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  TextInput,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const [on, setOn] = useState(false);
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder="Digite seu nome"
      />

      <Text style={styles.number}>{number}</Text>

      <TouchableOpacity
        disabled={on === true ? false : true}
        style={styles.btn}
        onPress={() => setNumber(number + 1)}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={on === true ? false : true}
        style={styles.btn}
        onPress={() => setNumber(number - 1)}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={on === true ? false : true}
        style={styles.btn}
        onPress={() => setNumber(0)}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>

      <Switch value={on} onValueChange={setOn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '80%',
    borderRadius: 5,
    textAlign: 'center',
  },
  number: {
    fontSize: 50,
    padding: 5,
    marginBottom: 20,
  },
  btn: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
    marginBottom: 15,
    width: 120,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    padding: 4,
  },
});

export default App;
