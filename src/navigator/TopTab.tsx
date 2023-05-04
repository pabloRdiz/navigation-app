import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScrenn } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appThme';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

type TabBarIConType = {
  focused: boolean;
  color: string;
};

const renderTabBarICon = (
  props: TabBarIConType,
  route: RouteProp<ParamListBase, string>,
) => {
  const { color } = props;
  let iconName: string = '';

  switch (route.name) {
    case 'Chat':
      iconName = 'chatbox-outline';
      break;
    case 'Contacts':
      iconName = 'people-outline';
      break;
    case 'Albums':
      iconName = 'albums-outline';
      break;
    default:
      iconName = 'bug-outline';
      break;
  }
  return <Icon name={iconName} size={20} color={color} />;
};

export const TopBar = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{ backgroundColor: colors.ligth }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          // props para android
          borderTopWidth: 0,

          // props para IOS
          shadowColor: 'transparent',

          // rposp para ambos
          elevation: 0,
        },
        tabBarIcon: props => renderTabBarICon(props, route),
      })}>
      <Tab.Screen name="Chat" component={ChatScrenn} />
      <Tab.Screen name="Contact" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
