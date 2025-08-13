import BackIcon from '../../../icons/BackIcon';
import ContactMeIcon from '../../../icons/ContactMeIcon';
import GithubIcon from '../../../icons/GithubIcon';
import LoginIcon from '../../../icons/LoginIcon';

import { StyledMenu, StyledMenuButton } from '../styles/Menu.styles';

interface MenuButtonProps {
  icon: React.ReactNode;
  content: string;
}

const MenuButton = ({ icon, content }: MenuButtonProps) => {
  return (
    <li>
      <StyledMenuButton>
        <span>{icon}</span>
        <span>{content}</span>
      </StyledMenuButton>
    </li>
  );
};

export default function Menu() {
  return (
    <StyledMenu>
      <MenuButton icon={<BackIcon size={30} color="white" />} content="" />
      <MenuButton icon={<GithubIcon size={34} color="white" />} content="" />
      <MenuButton icon={<ContactMeIcon size={24} color="white" />} content="" />
      <MenuButton icon={<LoginIcon size={24} color="white" />} content="" />
    </StyledMenu>
  );
}
