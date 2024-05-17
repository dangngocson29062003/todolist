import {View, Text, ImageBackground} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  children: ReactNode;
  color?: string;
}
const CardImageComponent = (props: Props) => {
  const {children, color} = props;
  return (
    <ImageBackground
      source={require('../assets/images/card-bg.png')}
      imageStyle={{borderRadius: 12}}
      style={[globalStyles.card]}>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: color ?? 'rgba(113, 77, 217, 0.9)',
          padding: 12,
          flex: 1,
        }}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageComponent;
