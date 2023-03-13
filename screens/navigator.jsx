import React, {useState, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Continents from './continents';
import Home from './home';
import Staff from './staff';

const Tab = createMaterialBottomTabNavigator();

function TabsNavigator({route}) {
  const [userData, setUserData] = useState(null);

  const {id} = route.params.data;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        setUserData(data);
        console.log('USER DATA >>> ', data);
      } catch (err) {
        console.log('Error while fetching user: ' + err);
      }
    };

    fetchUser();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="white"
      barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Dashboard"
        component={() => <Home userData={userData} />}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? 'black' : 'gray'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Staff"
        component={Staff}
        options={{
          tabBarLabel: 'Staff',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="people"
              color={focused ? 'black' : 'gray'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Continents"
        component={Continents}
        options={{
          tabBarLabel: 'Continents',
          tabBarIcon: ({focused}) => (
            <Fontisto
              name="world-o"
              color={focused ? 'black' : 'gray'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
