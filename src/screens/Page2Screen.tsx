import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { useNavigation } from '@react-navigation/core';

export const Page2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Hola mundo', headerBackTitle: '' });
  }, [navigation]);

  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>Page TWO screen</Text>
      <Button
        title="Go to page 3"
        onPress={() => navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
