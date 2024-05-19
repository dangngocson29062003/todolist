import {
  Add,
  Edit2,
  Element4,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import {TouchableOpacity, View} from 'react-native';
import AvatarGroup from '../../components/AvatarGroup';
import CardComponent from '../../components/CardComponent';
import CardImageComponent from '../../components/CardImageComponent';
import CircularComponent from '../../components/CircularComponent';
import Container from '../../components/Container';
import ProgressBarComponent from '../../components/ProgressBarComponent';
import RowComponent from '../../components/RowComponent';
import SectionComponent from '../../components/SectionComponent';
import SpaceComponent from '../../components/SpaceComponent';
import TagComponent from '../../components/TagComponent';
import TextComponent from '../../components/TextComponent';
import TitleComponent from '../../components/TitleComponent';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Container isScroll>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.desc} />
            <Notification size={24} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TextComponent text="Hi, Jason" />
          <TitleComponent text="Be Productive today" />
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            styles={[globalStyles.inputContainer]}
            onPress={() => navigation.navigate('SearchScreen')}>
            <TextComponent color={colors.gray2} text="Search task" />
            <SearchNormal1 size={24} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <CardComponent>
            <RowComponent>
              <View style={{flex: 1}}>
                <TitleComponent text="Task progress" />
                <TextComponent text="30/40 tasks done" />
                <SpaceComponent height={12} />
                <RowComponent justify="flex-start">
                  <TagComponent text="March 22" />
                </RowComponent>
              </View>
              <View>
                <CircularComponent value={20} />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent styles={{alignItems: 'flex-start'}}>
            <View style={{flex: 1}}>
              <CardImageComponent>
                <TouchableOpacity
                  style={[globalStyles.iconContainer]}
                  onPress={() => console.log('Pressed!')}>
                  <Edit2 color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="UX Design" />
                <TextComponent text="Task management mobile app" />
                <View style={{marginVertical: 24}}>
                  <AvatarGroup />
                  <ProgressBarComponent percent="70%" color="#0AACFF" />
                </View>
                <TextComponent
                  text="Due, 2023 Match 03"
                  size={12}
                  color={colors.desc}
                />
              </CardImageComponent>
            </View>
            <SpaceComponent width={16} />
            <View style={{flex: 1}}>
              <CardImageComponent color="rgba(33, 150, 249, 0.9)">
                <TouchableOpacity
                  style={[globalStyles.iconContainer]}
                  onPress={() => console.log('Pressed!')}>
                  <Edit2 color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="API Payment" />
                <AvatarGroup />
                <ProgressBarComponent percent="70%" color="#A2F068" />
              </CardImageComponent>
              <SpaceComponent height={16} />
              <CardImageComponent color="rgba(18, 181, 22, 0.9)">
                <TouchableOpacity
                  style={[globalStyles.iconContainer]}
                  onPress={() => console.log('Pressed!')}>
                  <Edit2 color={colors.white} />
                </TouchableOpacity>
                <TitleComponent text="Update work" />
                <TextComponent text="Revision home page" />
              </CardImageComponent>
            </View>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <TitleComponent text="Urgent tasks" />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={40} />
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </Container>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: 'coral',
              padding: 10,
              borderRadius: 100,
              width: '80%',
            },
          ]}>
          <TextComponent text="Add new task" styles={{flex: 0}} />
          <Add size={22} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
