import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: 'atuny0',
          password: '9uQFF1Lh',
          // expiresInMins: 60, // optional
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('DATA: ', data);
          return navigation.navigate('Home', {data});
        });
    } catch (error) {
      console.log('Error while logging in: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={handleSubmit}
        color="black"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {width: '40%', backgroundColor: 'black', color: 'red'},
});

export default Login;
