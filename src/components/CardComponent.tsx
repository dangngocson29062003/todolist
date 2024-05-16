import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  children: ReactNode;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
}
const CardComponent = (props: Props) => {
  const {children, bgColor, style} = props;
  return (
    <View style={[globalStyles.inputContainer, {padding: 12}, style]}>
      {children}
    </View>
  );
};

export default CardComponent;
