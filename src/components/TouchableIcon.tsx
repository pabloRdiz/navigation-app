import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appThme';
import { AuthContext } from '../context/AuthContext';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export const TouchableIcon = (porps: Props) => {
  const { name, size = 60, color = colors.primary } = porps;

  const { changeFavoriteIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(name)}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
