import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import TextComponent from './TextComponent';
interface Props {
  text: string;
  color?: string;
  tagStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
const TagComponent = (props: Props) => {
  const {text, color, tagStyle, textStyle, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[
        globalStyles.tag,
        tagStyle,
        {backgroundColor: color ?? colors.blue},
      ]}>
      <TextComponent text={text} styles={textStyle} />
    </TouchableOpacity>
  );
};

export default TagComponent;
