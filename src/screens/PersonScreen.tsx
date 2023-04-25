import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { RouteStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RouteStackParams, 'PersonScreen'> {}

export const PersonScreen = ({ navigation, route }: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
