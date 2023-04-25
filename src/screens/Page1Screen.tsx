/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appThme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

const DrawerButton = ({ navigation }: Props): JSX.Element => {
  return <Button title="Menu" onPress={() => navigation.toggleDrawer()} />;
};

export const Page1Screen = ({ navigation, route }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerButton navigation={navigation} route={route} />,
    });
  }, [navigation, route]);

  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>Page ONE screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Text> Navigate with args</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', { id: 1, name: 'pepe' })
          }>
          <Text style={styles.bigButtonText}>Pepe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() =>
            navigation.navigate('PersonScreen', { id: 2, name: 'lui' })
          }>
          <Text style={styles.bigButtonText}>Lui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
