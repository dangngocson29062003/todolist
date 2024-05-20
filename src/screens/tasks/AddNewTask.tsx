import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AttachSquare, CloseCircle, Cloud} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import ButtonComponent from '../../components/ButtonComponent';
import Container from '../../components/Container';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import DropdownPicker from '../../components/DropdownPicker';
import InputComponent from '../../components/InputComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import SpaceComponent from '../../components/SpaceComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import {SelectModel} from '../../models/SelectModel';
import {TaskModel} from '../../models/TaskModel';
import RNFetchBlob from 'rn-fetch-blob';
const initValue: TaskModel = {
  title: '',
  description: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: [],
};

const AddNewTask = ({navigation}: any) => {
  const [taskDetail, setTaskDetail] = useState<TaskModel>(initValue);
  const [usersSelect, setUsersSelect] = useState<SelectModel[]>([]);
  const [attachments, setAttachments] = useState<DocumentPickerResponse[]>([]);
  const [attachmentsUrl, setAttachmentsUrl] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    handleGetAllUsers();
  }, []);
  useEffect(() => {
    console.log('a');
    if (attachments.length === 0) {
      setIsLoading(false);
    }
  }, [attachments]);
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    }
  }, []);

  const getFilePath = async (file: DocumentPickerResponse) => {
    if (Platform.OS === 'ios') {
      return file.uri;
    } else {
      return (await RNFetchBlob.fs.stat(`${file.fileCopyUri}`)).path;
    }
  };
  const handleGetAllUsers = async () => {
    await firestore()
      .collection('users')
      .get()
      .then(snap => {
        if (snap.empty) {
          console.log(`users data not found`);
        } else {
          const items: SelectModel[] = [];
          snap.forEach(item => {
            items.push({
              label: item.data().name,
              value: item.id,
            });
          });
          setUsersSelect(items);
        }
      })
      .catch((error: any) => console.log(`Can't get users, ${error.message}`));
  };
  const handleChangeValue = (id: string, value: string | string[] | Date) => {
    const item: any = {...taskDetail};

    item[`${id}`] = value;

    setTaskDetail(item);
  };

  const handleAddNewTask = async () => {
    const data = {
      ...taskDetail,
      fileUrls: attachmentsUrl,
    };
    await firestore()
      .collection('tasks')
      .add(data)
      .then(() => {
        console.log('News task added!!');
        navigation.goBack();
      })
      .catch(error => console.log(error));
  };

  const handleDocumentPicker = () => {
    DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      copyTo: 'cachesDirectory',
    })
      .then(res => {
        setIsLoading(true);
        setAttachments([...attachments, ...res]);
      })
      .catch(error => console.log(error));
  };
  const handlePushImage = () => {
    attachments.forEach(item => handleUploadFileToStorage(item));
  };
  const handleUploadFileToStorage = async (item: DocumentPickerResponse) => {
    if (item) {
      const filename = item.name ?? `file${Date.now()}`;
      const path = `documents/${filename}`;
      const uri = await getFilePath(item);
      const items = [...attachmentsUrl];
      await storage().ref(path).putFile(uri);
      await storage()
        .ref(path)
        .getDownloadURL()
        .then(url => {
          items.push(url);
          setAttachmentsUrl(items);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    }
  };
  const handleDeleteAttachment = (index: number) => {
    const file = [...attachments];
    if (file) {
      file.splice(index, 1);
      setAttachments(file);
    }
  };
  return (
    <Container back title="Add new task" isScroll>
      <SectionComponent>
        <InputComponent
          value={taskDetail.title}
          onChange={val => handleChangeValue('title', val)}
          title="Title"
          allowClear
          placeholder="Title of task"
        />
        <InputComponent
          value={taskDetail.description}
          onChange={val => handleChangeValue('description', val)}
          title="Description"
          allowClear
          placeholder="Content"
          multible
          numberOfLines={3}
        />
        <DateTimePickerComponent
          selected={taskDetail.dueDate}
          onSelect={val => handleChangeValue('dueDate', val)}
          placeholder="Choice"
          type="date"
          title="Due date"
        />
        <RowComponent>
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              selected={taskDetail.start}
              type="time"
              onSelect={val => handleChangeValue('start', val)}
              title="Start"
            />
          </View>
          <SpaceComponent width={10} />
          <View style={{flex: 1}}>
            <DateTimePickerComponent
              selected={taskDetail.end}
              type="time"
              onSelect={val => handleChangeValue('end', val)}
              title="End"
            />
          </View>
        </RowComponent>
        <DropdownPicker
          selected={taskDetail.uids}
          title="Members"
          onSelect={val => handleChangeValue('uids', val)}
          items={usersSelect}
          multible
        />
        <View>
          <RowComponent justify="space-between">
            <RowComponent styles={{flex: 0}} onPress={handleDocumentPicker}>
              <TitleComponent text="Attachments" />
              <SpaceComponent width={8} />
              <AttachSquare size={20} color={colors.white} />
            </RowComponent>

            {attachments.length > 0 && (
              <RowComponent onPress={handlePushImage}>
                <TitleComponent text="Push" color="coral" />
                <SpaceComponent width={8} />
                <Cloud size={20} color="coral" />
              </RowComponent>
            )}
          </RowComponent>
          {attachments.length > 0 &&
            attachments.map((item, index) => (
              <RowComponent
                key={`attachment${index}`}
                styles={{
                  paddingVertical: 12,
                }}
                onPress={() => handleDeleteAttachment(index)}>
                <TextComponent text={item.name ?? ''} />
                <SpaceComponent width={8} />
                <CloseCircle size={20} color={colors.text} />
              </RowComponent>
            ))}
        </View>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="Save"
          onPress={handleAddNewTask}
          isLoading={isLoading}
        />
      </SectionComponent>
    </Container>
  );
};

export default AddNewTask;
