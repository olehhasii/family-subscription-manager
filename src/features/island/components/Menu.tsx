import type { Variants } from 'motion';
import BackIcon from '../../../icons/BackIcon';
import ContactMeIcon from '../../../icons/ContactMeIcon';
import GithubIcon from '../../../icons/GithubIcon';
import LoginIcon from '../../../icons/LoginIcon';

import { StyledMenu, StyledMenuButton } from '../styles/Menu.styles';
import { easeOut, motion } from 'motion/react';

interface MenuButtonProps {
  icon: React.ReactNode;
  content: string;
  contentWidth?: number | string;
  onClick?: () => void;
}

const MenuButton = ({ icon, content, contentWidth = 60, onClick }: MenuButtonProps) => {
  const buttonVariants: Variants = {
    hidden: {
      scale: 0,
      filter: 'blur(10px)',
      opacity: 0,
    },
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { ease: easeOut, duration: 0.3, delay: 0.3 },
    },
    exit: {
      scale: 0,
      filter: 'blur(10px)',
      opacity: 0,
      transition: { ease: easeOut, duration: 0.2 },
    },
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
      <StyledMenuButton
        as={motion.button}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hovered"
        exit="exit"
        onClick={onClick}
      >
        <span>{icon}</span>
        <motion.span variants={contentVariants} initial={{ scale: 0, opacity: 0, filter: 'blur(10px)', width: 0 }}>
          {content}
        </motion.span>
      </StyledMenuButton>
    </li>
  );
};

export default function Menu({ onCloseMenu }: { onCloseMenu: () => void }) {
  const iconVariants: Variants = {
    hovered: { fill: '#000000' },
  };

  const menuVariants: Variants = {
    initial: {
      width: 360,
    },
    animate: {
      width: 'auto',
      transition: { ease: easeOut, duration: 0.3 },
    },
    exit: {
      width: 360,
      transition: { ease: easeOut, duration: 0.2, delay: 0.2 },
    },
  };

  return (
    <StyledMenu as={motion.ul} variants={menuVariants} initial="initial" animate="animate" exit="exit">
      <MenuButton
        icon={<BackIcon size={24} color="#ffffff" variants={iconVariants} />}
        content="Back"
        contentWidth={50}
        onClick={onCloseMenu}
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
