import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.goblalMargin, { marginTop: inset.top }]}>
      <Text style={styles.title}>Settings screens</Text>
    </View>
  );
};
