import React, {ReactNode, useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TitleComponent from './TitleComponent';
import {CloseCircle, Eye, EyeSlash} from 'iconsax-react-native';

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
  isPassword?: boolean;
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
    isPassword,
  } = props;
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multible && numberOfLines ? 24 * numberOfLines : 24,

            paddingVertical: 14,
            paddingHorizontal: 10,
          },
        ]}>
        {prefix && prefix}
        <View
          style={{
            flex: 1,
            paddingLeft: prefix ? 8 : 0,
            paddingRight: affix ? 8 : 0,
          }}>
          <TextInput
            style={[
              globalStyles.text,
              {margin: 0, marginBottom: -5, padding: 0, flex: 1},
            ]}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'#676767'}
            value={value}
            onChangeText={val => onChange(val)}
            multiline={multible}
            numberOfLines={numberOfLines}
            secureTextEntry={isPassword ? !showPass : false}
            autoCapitalize="none"
          />
        </View>
        {affix && affix}
        {allowClear && (
          <TouchableOpacity onPress={() => onChange('')}>
            <CloseCircle size={20} color={colors.white} />
          </TouchableOpacity>
        )}
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            {showPass ? (
              <EyeSlash size={20} color={colors.desc} />
            ) : (
              <Eye size={20} color={colors.desc} />
            )}
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
