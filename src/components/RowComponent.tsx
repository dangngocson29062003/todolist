import {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  children: ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const RowComponent = (props: Props) => {
  const {children, justify, onPress, style} = props;
  const localStyle = [
    globalStyles.row,
    {justifyContent: justify ?? 'center'},
    style,
  ];
  return onPress ? (
    <TouchableOpacity
      style={localStyle}
      onPress={onPress ? () => onPress() : undefined}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};
export default RowComponent;
