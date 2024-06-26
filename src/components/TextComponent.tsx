import {StyleProp, Text, TextStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';
interface Props {
  text: string | undefined;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
  styles?: StyleProp<TextStyle>;
}
const TextComponent = (props: Props) => {
  const {text, size, font, color, flex, styles} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          flex: flex ?? 0,
          fontFamily: font ?? fontFamilies.regular,
          fontSize: size ?? 14,
          color: color ?? colors.desc,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};
export default TextComponent;
