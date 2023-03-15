import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, View, TouchableOpacity} from 'react-native';

function Logout() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginVertical: 280}}>
        <TouchableOpacity>
          <Button onPress={handlePress} color="black" title="Logout" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Logout;
