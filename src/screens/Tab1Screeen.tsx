import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab 1 screen');
  }, []);

  return (
    <View style={styles.goblalMargin}>
      <Text>Icons</Text>

      <TouchableIcon name="airplane-outline" />
      <TouchableIcon name="grid-outline" />
      <TouchableIcon name="business-outline" />
      <TouchableIcon name="medal-outline" />
      <TouchableIcon name="planet-outline" />
    </View>
  );
};
