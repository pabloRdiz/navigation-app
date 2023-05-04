import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/appThme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab 1 screen');
  }, []);

  return (
    <View style={styles.goblalMargin}>
      <Text>Icons</Text>
      <Text>
        {/* <Icon name="airplane-outline" size={80} color="#900" /> */}
        'hola'
      </Text>
    </View>
  );
};
