import type { Variants } from 'motion';
import BackIcon from '../../../icons/BackIcon';
import ContactMeIcon from '../../../icons/ContactMeIcon';
import GithubIcon from '../../../icons/GithubIcon';
import LoginIcon from '../../../icons/LoginIcon';

import { StyledMenu, StyledMenuButton } from '../styles/Menu.styles';
import { motion } from 'motion/react';

interface MenuButtonProps {
  icon: React.ReactNode;
  content: string;
  contentWidth?: number | string;
}

const MenuButton = ({ icon, content, contentWidth = 60 }: MenuButtonProps) => {
  const buttonVariants: Variants = {
    hovered: {
      backgroundColor: 'white',
    },
  };

  const contentVariants: Variants = {
    hovered: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0)',
      width: contentWidth,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <li>
      <StyledMenuButton as={motion.button} variants={buttonVariants} whileHover="hovered">
        <span>{icon}</span>
        <motion.span variants={contentVariants} initial={{ scale: 0, opacity: 0, filter: 'blur(10px)', width: 0 }}>
          {content}
        </motion.span>
      </StyledMenuButton>
    </li>
  );
};

export default function Menu() {
  const iconVariants: Variants = {
    hovered: { fill: '#000000' },
  };

  return (
    <StyledMenu>
      <MenuButton
        icon={<BackIcon size={24} color="#ffffff" variants={iconVariants} />}
        content="Back"
        contentWidth={50}
      />
      <MenuButton
        icon={<GithubIcon size={24} color="#ffffff" variants={iconVariants} />}
        contentWidth={80}
        content="Github Repo"
      />
      <MenuButton
        icon={<ContactMeIcon size={24} color="#ffffff" variants={iconVariants} />}
        contentWidth={85}
        content="Contact me"
      />
      <MenuButton
        icon={<LoginIcon size={24} color="#ffffff" variants={iconVariants} />}
        contentWidth={80}
        content="Admin Panel"
      />
    </StyledMenu>
  );
}
