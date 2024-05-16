import {ReactNode} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
interface Props {
  title?: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}
const Container = (props: Props) => {
  const {title, back, right, children} = props;
  return <ScrollView style={globalStyles.container}>{children}</ScrollView>;
};
export default Container;
