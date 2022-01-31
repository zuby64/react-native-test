import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../bottomNavigator';
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
