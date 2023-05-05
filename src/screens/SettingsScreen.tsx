import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appThme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {
  const inset = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);
  const { favoriteIcon } = authState;

  return (
    <View style={[styles.goblalMargin, { marginTop: inset.top }]}>
      <Text style={styles.title}>Settings screens</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      <Text style={{ textAlign: 'center' }}>
        {favoriteIcon && <Icon name={favoriteIcon} size={80} color={'blue'} />}
      </Text>
    </View>
  );
};
