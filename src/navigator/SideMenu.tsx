import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appThme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="StackNavigator"
        // options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        // options={{ title: 'Settings' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const DrawerContent = (props: DrawerContentComponentProps): JSX.Element => {
  console.log(
    '🚀 turbo-cl ~ file: SideMenu.tsx:42 ~ DrawerContent ~ props:',
    props.navigation,
  );
  const { navigation } = props;
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('StackNavigator');
          }}>
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
