import {View, Text, DimensionValue} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';
interface Props {
  size?: 'small' | 'default' | 'large';
  color?: string;
  percent: DimensionValue;
}
const ProgressBarComponent = (props: Props) => {
  const {size, color, percent} = props;
  const heightContent = size === 'small' ? 6 : size === 'large' ? 10 : 8;
  return (
    <View>
      <View
        style={{
          height: heightContent,
          width: '100%',
          backgroundColor: 'rgba(86, 61, 159, 0.8)',
          marginTop: 12,
          marginBottom: 6,
          borderRadius: 100,
        }}>
        <View
          style={{
            backgroundColor: color ?? colors.blue,
            width: percent,
            height: heightContent,
            borderRadius: 100,
          }}></View>
      </View>
      <RowComponent justify="space-between">
        <TextComponent text="Progress" size={12} />
        <TextComponent
          text={`${percent}`}
          font={fontFamilies.bold}
          size={12}
          styles={{flex: 0}}
        />
      </RowComponent>
    </View>
  );
};

export default ProgressBarComponent;
