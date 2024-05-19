import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {fontFamilies} from '../constants/fontFamilies';
import TextComponent from './TextComponent';
interface Props {
  text: string;
  font?: string;
  size?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
}
const TitleComponent = (props: Props) => {
  const {text, font, size, color, styles, flex} = props;
  return (
    <TextComponent
      text={text}
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      styles={styles}
      flex={flex ?? 0}
    />
  );
};

export default TitleComponent;
