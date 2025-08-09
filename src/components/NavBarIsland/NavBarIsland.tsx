import { Actions, HorizontalLine, Logo, Wrapper } from './NavBarIslands.styles';
import ActionButton from '../Actions/ActionButton';
import InfoIcon from '../../icons/InfoIcon';
import Clock from '../Clock/Clock';
import DarkThemeIcon from '../../icons/DarkThemeIcon';
import MoreIcon from '../../icons/MoreIcon';

export default function NavBarIsland() {
  return (
    <Wrapper>
      <Logo>🎧</Logo>
      <Clock />
      <Actions>
        <ActionButton icon={<DarkThemeIcon width="30px" height="30px" />} />
        <ActionButton icon={<InfoIcon />} />
        <HorizontalLine />
        <ActionButton icon={<MoreIcon />} />
      </Actions>
    </Wrapper>
  );
}
