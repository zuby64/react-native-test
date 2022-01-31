import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import Favourite from '../../screens/Home/favourite';
import List from '../../screens/appScreens/List';
import SelectedUsers from '../../screens/appScreens/SelectedUsers';
const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#000000',
        tabBarActiveTintColor: '#EE16B9',
        headerShown: false,
        tabBarLabelStyle: {fontSize: 14},
      }}>
      <Tab.Screen
        name="ListView"
        options={{
          tabBarLabel: 'List View',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
        component={List}
      />
      <Tab.Screen
        name="SelectedUsers"
        options={{
          tabBarLabel: 'Selected Users',
          tabBarIcon: ({color, size}) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
        component={SelectedUsers}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
