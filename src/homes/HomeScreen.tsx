import {View} from 'react-native';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';
import {globalStyles} from '../styles/globalStyles';
import {Element4, Notification, SearchNormal1} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';

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
          <TextComponent color="#696B6F" text="Search task" />
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
              <TextComponent text="Circle Chart" />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};
export default HomeScreen;
