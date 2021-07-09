import React from 'react';
import {View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Profile"
        color="black"
        onPress={() => navigation.openDrawer()}></Button>
    </View>
  );
};

export default HomeScreen;
