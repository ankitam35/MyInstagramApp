import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CircularIconProps = {
  name: string;
  size?: number;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
};

const CircularButton: React.FC<CircularIconProps> = ({ name, size = 24, color = '#000', onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.iconContainer, style]} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    padding: 10,
  },
});

export default CircularButton;
