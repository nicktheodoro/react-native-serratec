import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './src/HomeScreen';
import Profile from './src/Profile';
import {View, Button} from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const CustomDrawer = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Button
        title="Teste"
        color="black"
        onPress={() => navigation.navigate('Profile')}></Button>
    </View>
  );
};
