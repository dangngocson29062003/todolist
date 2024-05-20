import {
  ArrowDown2,
  CloseCircle,
  SearchNormal1,
  TickCircle,
} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, Modal, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {SelectModel} from '../models/SelectModel';
import {globalStyles} from '../styles/globalStyles';
import ButtonComponent from './ButtonComponent';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import TitleComponent from './TitleComponent';
import InputComponent from './InputComponent';
import SpaceComponent from './SpaceComponent';
interface Props {
  title?: string;
  items: SelectModel[];
  selected?: string[];
  onSelect: (val: string[]) => void;
  multible?: boolean;
}
const DropdownPicker = (props: Props) => {
  const {title, items, selected, onSelect, multible} = props;
  const [isVisible, setIsVisible] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [results, setResults] = useState<SelectModel[]>([]);
  const [dataSelected, setDataSelected] = useState<string[]>([]);
  useEffect(() => {
    selected && setDataSelected(selected);
  }, [isVisible]);
  useEffect(() => {
    if (!searchKey) {
      setResults([]);
    } else {
      const data = items.filter(element =>
        element.label.toLowerCase().includes(searchKey.toLowerCase()),
      );
      setResults(data);
    }
  }, [searchKey]);
  const handleSelectItem = (id: string) => {
    if (multible) {
      const data = [...dataSelected];
      const index = data.findIndex(element => element == id);
      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(id);
      }
      setDataSelected(data);
    } else {
      setDataSelected([id]);
    }
  };
  const handleConfirmSelect = () => {
    onSelect(dataSelected);
    setIsVisible(false);
    setDataSelected([]);
  };
  const handleRemoveItemSelected = (index: number) => {
    if (selected) {
      selected?.splice(index, 1);
      onSelect(selected);
    }
  };
  const renderSelectedItem = (id: string, index: number) => {
    const item = items.find(element => element.value === id);
    return (
      item && (
        <RowComponent
          onPress={() => handleRemoveItemSelected(index)}
          key={id}
          styles={{
            marginRight: 4,
            padding: 4,
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: colors.gray2,
          }}>
          <TextComponent text={item?.label} flex={0} />
          <SpaceComponent width={4} />
          <CloseCircle size={14} color={colors.text} />
        </RowComponent>
      )
    );
  };
  return (
    <View style={{marginBottom: 16}}>
      {title && <TitleComponent text={title} />}
      <RowComponent
        onPress={() => setIsVisible(true)}
        styles={[
          globalStyles.inputContainer,
          {marginTop: title ? 8 : 0, paddingVertical: 14},
        ]}>
        <View style={{flex: 1, paddingRight: 12}}>
          {selected && selected.length > 0 ? (
            <RowComponent justify="flex-start" styles={{flexWrap: 'wrap'}}>
              {selected.map((id, index) => renderSelectedItem(id, index))}
            </RowComponent>
          ) : (
            <TextComponent text="Select" color={colors.gray2} flex={0} />
          )}
        </View>
        <ArrowDown2 size={20} color={colors.text} />
      </RowComponent>
      <Modal
        visible={isVisible}
        style={{flex: 1}}
        transparent
        animationType="slide"
        statusBarTranslucent>
        <View
          style={[
            globalStyles.container,
            {padding: 20, paddingTop: 60, paddingBottom: 60},
          ]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <RowComponent
                styles={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flex: 1, marginRight: 12}}>
                  <InputComponent
                    value={searchKey}
                    onChange={val => setSearchKey(val)}
                    placeholder="Search"
                    prefix={<SearchNormal1 size={20} color={colors.gray2} />}
                    allowClear
                  />
                </View>
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <TextComponent text="Cancle" color="coral" flex={0} />
                </TouchableOpacity>
              </RowComponent>
            }
            style={{flex: 1}}
            data={searchKey ? results : items}
            renderItem={({item}) => (
              <RowComponent
                onPress={() => handleSelectItem(item.value)}
                key={item.value}
                justify="space-between"
                styles={{paddingVertical: 12}}>
                <TextComponent
                  text={item.label}
                  size={16}
                  color={
                    dataSelected.includes(item.value) ? 'coral' : colors.text
                  }
                />
                {dataSelected.includes(item.value) && (
                  <TickCircle size={22} color="coral" />
                )}
              </RowComponent>
            )}
          />
          <ButtonComponent text="Confirm" onPress={handleConfirmSelect} />
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPicker;
