import { easeOut } from 'motion';
import DarkThemeIcon from '../../icons/DarkThemeIcon';
import InfoIcon from '../../icons/InfoIcon';
import MoreIcon from '../../icons/MoreIcon';
import ActionButton from '../Actions/ActionButton';
import Clock from '../Clock/Clock';
import { Actions, HorizontalLine, Logo, StyledNav } from './NavBar.styles';
import { motion } from 'motion/react';

export default function NavBar() {
  const parentVariants = {
    hidden: {
      translateY: 100,
      width: 40,
      height: 30,
    },
    visible: {
      translateY: 0,
      width: 360,
      height: 60,
      transition: {
        translateY: { duration: 0.5, type: 'spring', bounce: 0.4 },
        width: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        height: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        delayChildren: 0.7,
      },
    },
  };

  const childVariants = {
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { ease: easeOut, duration: 0.3 },
    },
    hidden: {
      scale: 0.5,
      filter: 'blur(10px)',
      opacity: 0.1,
    },
  };

  return (
    <StyledNav as={motion.nav} variants={parentVariants} initial="hidden" animate="visible">
      <Logo as={motion.div} variants={childVariants}>
        🎧
      </Logo>
      <Clock variants={childVariants} />
      <Actions as={motion.ul} variants={childVariants}>
        <ActionButton icon={<DarkThemeIcon width="30px" height="30px" />} />
        <ActionButton icon={<InfoIcon />} />
        <HorizontalLine />
        <ActionButton icon={<MoreIcon />} />
      </Actions>
    </StyledNav>
  );
}
