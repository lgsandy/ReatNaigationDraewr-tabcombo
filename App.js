import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './src/screen/MainTabScreen';
import {DrawerContent} from './src/screen/DrawerContent';

const Drawer = createDrawerNavigator();
//create stack navigation to nest in drawer

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="DrawerHome" component={MainTabScreen} />
        {/* <Drawer.Screen name="detailScreen" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
