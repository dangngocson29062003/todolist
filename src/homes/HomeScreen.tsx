import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import {View} from 'react-native';
import CardComponent from '../components/CardComponent';
import CircularComponent from '../components/CircularComponent';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TagComponent from '../components/TagComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';

const HomeScreen = () => {
  return (
    <Container>
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
          style={[globalStyles.inputContainer]}
          onPress={() => console.log('Pressed!')}>
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
    </Container>
  );
};
export default HomeScreen;
