import { easeOut } from 'motion';
import InfoIcon from '../../../icons/InfoIcon';
import MoreIcon from '../../../icons/MoreIcon';

import Clock from './Clock';

import { motion, type Variants } from 'motion/react';
import ActionButton from '../../../ui/ActionButton';
import { Actions, HorizontalLine, StyledNav } from '../styles/NavBar.styles';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

interface NavBarProps {
  onOpenInfo: () => void;
  onOpenMenu: () => void;
  skipIntro: boolean;
}

export default function NavBar({ onOpenInfo, skipIntro, onOpenMenu }: NavBarProps) {
  const parentVariants: Variants = {
    hidden: {
      width: skipIntro ? 360 : 40,
      height: skipIntro ? 60 : 30,
    },
    visible: {
      width: 360,
      height: 60,
      transition: {
        width: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        height: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
      },
    },
  };

  const childVariants: Variants = {
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { ease: easeOut, duration: 0.3, delay: skipIntro ? 0.15 : 0.7 },
    },
    hidden: {
      scale: 0.1,
      filter: 'blur(30px)',
      opacity: 0.1,
    },
  };

  return (
    <StyledNav as={motion.nav} variants={parentVariants} initial={'hidden'} animate="visible">
      <motion.div variants={childVariants}>
        <LanguageToggle />
      </motion.div>

      <Clock variants={childVariants} />
      <Actions as={motion.ul} variants={childVariants}>
        <ThemeToggle />
        <ActionButton icon={<InfoIcon />} onClick={onOpenInfo} />
        <HorizontalLine />
        <ActionButton icon={<MoreIcon />} onClick={onOpenMenu} />
      </Actions>
    </StyledNav>
  );
}
