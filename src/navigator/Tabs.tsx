/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screeen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appThme';
import { TopBar } from './TopTab';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type TabBarIConType = {
  focused: boolean;
  color: string;
  size: number;
};

const renderTabBarICon = (
  props: TabBarIConType,
  route: RouteProp<ParamListBase, string>,
) => {
  const { color } = props;
  let iconName: string = '';

  switch (route.name) {
    case 'Tab1Screen':
      iconName = 'bandage-outline';
      break;

    case 'Tab2Screen':
      iconName = 'basketball-outline';
      break;

    case 'Tab3Screen':
      iconName = 'bookmarks-outline';
      break;

    default:
      iconName = 'bug-outline';
      break;
  }
  return <Icon name={iconName} size={20} color={color} />;
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarIcon: props => renderTabBarICon(props, route),
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: { fontSize: 16 },
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{ title: 'tab1' }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{ title: 'tab2' }}
        component={TopBar}
      />
      <Tab.Screen
        name="StackNavigatorss"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
