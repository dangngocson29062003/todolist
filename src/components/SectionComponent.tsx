import {ReactNode} from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  children: ReactNode;
  styles?: StyleProp<TextStyle>;
}
const SectionComponent = (props: Props) => {
  const {children, styles} = props;
  return <View style={[globalStyles.section, styles]}>{children}</View>;
};
export default SectionComponent;
