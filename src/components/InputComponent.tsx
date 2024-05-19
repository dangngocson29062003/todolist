import React, {ReactNode} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TitleComponent from './TitleComponent';
import {CloseCircle} from 'iconsax-react-native';
interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  title?: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  multible?: boolean;
  numberOfLines?: number;
}
const InputComponent = (props: Props) => {
  const {
    value,
    onChange,
    placeholder,
    title,
    prefix,
    affix,
    allowClear,
    multible,
    numberOfLines,
  } = props;
  console.log(placeholder);
  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 6 : 0,
            minHeight: multible && numberOfLines ? 24 * numberOfLines : 24,
            paddingVertical: 8,
            paddingHorizontal: 10,
          },
        ]}>
        {prefix && prefix}
        <View style={{flex: 1}}>
          <TextInput
            style={[globalStyles.text, {margin: 0, padding: 0, flex: 1}]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLines}
          />
        </View>
        {affix && affix}
        {allowClear && (
          <TouchableOpacity onPress={() => onChange('')}>
            <CloseCircle size={20} color={colors.white} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
