import {ArrowDown2} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import TitleComponent from './TitleComponent';
import {Modal} from 'react-native';
import {Dimensions} from 'react-native';
import SpaceComponent from './SpaceComponent';
import DatePicker from 'react-native-date-picker';
interface Props {
  type?: 'date' | 'time' | 'datetime';
  title?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (val: Date) => void;
}
const DateTimePickerComponent = (props: Props) => {
  const {type, title, placeholder, selected, onSelect} = props;
  const [isVisibleModalDateTime, setIsVisibleModalDateTime] = useState(false);
  const [date, setDate] = useState(selected ?? new Date());
  return (
    <>
      <View style={{marginBottom: 16}}>
        {title && <TitleComponent text={title} />}
        <RowComponent
          onPress={() => setIsVisibleModalDateTime(true)}
          styles={[
            globalStyles.inputContainer,
            {marginTop: title ? 6 : 0, paddingVertical: 12},
          ]}>
          <TextComponent
            flex={1}
            color={selected ? colors.text : '#676767'}
            text={
              selected
                ? type === 'time'
                  ? `${selected.getHours()}:${selected.getMinutes()}`
                  : `${selected.getDate()}/${
                      selected.getMonth() + 1
                    }/${selected.getFullYear()}`
                : placeholder
                ? placeholder
                : ''
            }
          />
          <ArrowDown2 size={20} color={colors.text} />
        </RowComponent>
      </View>
      <Modal visible={isVisibleModalDateTime} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <View
            style={{
              margin: 20,
              width: Dimensions.get('window').width - 40,
              backgroundColor: colors.white,
              padding: 20,
              borderRadius: 20,
            }}>
            <View>
              <DatePicker
                mode={type ? type : 'datetime'}
                date={date}
                onDateChange={val => setDate(val)}
                locale="vi"
              />
            </View>

            <SpaceComponent height={20} />
            <Button
              title="Confirm"
              onPress={() => {
                onSelect(date);
                setIsVisibleModalDateTime(false);
              }}
            />
            <SpaceComponent height={20} />
            <Button
              title="Close"
              onPress={() => setIsVisibleModalDateTime(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DateTimePickerComponent;
