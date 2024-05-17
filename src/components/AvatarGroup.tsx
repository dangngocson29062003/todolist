import {View, Image} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import {colors} from '../constants/colors';
import TextComponent from './TextComponent';
import {fontFamilies} from '../constants/fontFamilies';

const AvatarGroup = () => {
  const uidsLength = 10;
  const imageStyle = {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.white,
  };
  return (
    <RowComponent justify="flex-start">
      {Array.from({length: uidsLength}).map(
        (item, index) =>
          index < 3 && (
            <Image
              source={require('../assets/images/avatar.jpg')}
              key={`image${index}`}
              style={[
                imageStyle,
                {
                  marginLeft: index > 0 ? -10 : 0,
                },
              ]}
            />
          ),
      )}
      {uidsLength > 5 && (
        <View
          style={[
            imageStyle,
            {
              backgroundColor: 'coral',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              marginLeft: -10,
            },
          ]}>
          <TextComponent
            flex={0}
            styles={{
              lineHeight: 20,
            }}
            font={fontFamilies.bold}
            text={`+${uidsLength - 7}`}
          />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroup;
