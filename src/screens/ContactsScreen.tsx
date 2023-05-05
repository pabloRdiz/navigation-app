import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appThme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
  const { signIn, authState } = useContext(AuthContext);
  const { isLoggedIn } = authState;

  return (
    <View style={styles.goblalMargin}>
      <Text style={styles.title}>Contacts Screeen</Text>
      {!isLoggedIn && <Button title="SigIn" onPress={signIn} />}
    </View>
  );
};
