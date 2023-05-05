import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appThme';

export const AlbumsScreen = () => {
  const { logout, authState } = useContext(AuthContext);
  const { isLoggedIn } = authState;
  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>Albums Screeen</Text>
      {isLoggedIn && <Button title="Sign out" onPress={logout} />}
    </View>
  );
};
