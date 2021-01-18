import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#4fc1e0',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: '#1741fc',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="book-open" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#e31999',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#1190c2',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons
            name="book-multiple"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#4fc1e0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            color="#fff"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1741fc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // fontWeight: '',
      },
    }}>
    <HomeStack.Screen
      name="Details"
      component={DetailScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            color="#fff"
            size={30}
            onPress={() => navigation.openDrawer()}
            style={{marginLeft: 10}}
          />
        ),
      }}
    />
  </DetailStack.Navigator>
);

export default MainTabScreen;
