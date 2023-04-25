import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>Page THREE screen</Text>
      <Button title="Go to page 2" onPress={() => navigation.pop()} />
      <Button title="Go to page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
