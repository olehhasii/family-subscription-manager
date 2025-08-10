import { Actions, HorizontalLine, Logo, Wrapper } from './NavBarIslands.styles';
import ActionButton from '../Actions/ActionButton';
import InfoIcon from '../../icons/InfoIcon';
import Clock from '../Clock/Clock';
import DarkThemeIcon from '../../icons/DarkThemeIcon';
import MoreIcon from '../../icons/MoreIcon';
import { motion } from 'motion/react';

export default function NavBarIsland() {
  const variants = {
    visible: {
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
    },
    hidden: {
      scale: 0.5,
      filter: 'blur(10px)',
      opacity: 0,
    },
  };

  return (
    <Wrapper
      as={motion.nav}
      initial={{ translateX: '-50%', translateY: 100, width: 40, height: 30 }}
      animate={{ translateY: 0, width: 360, height: 60 }}
      transition={{
        translateY: { duration: 0.5, type: 'spring', bounce: 0.4 },
        width: { duration: 0.5, delay: 0.5, ease: 'easeOut' },
        height: { duration: 0.5, delay: 0.5, ease: 'easeOut' },
      }}
    >
      <Logo
        as={motion.div}
        initial={{ scale: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
      >
        🎧
      </Logo>
      <Clock
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      />
      <Actions
        as={motion.ul}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      >
        <ActionButton icon={<DarkThemeIcon width="30px" height="30px" />} />
        <ActionButton icon={<InfoIcon />} />
        <HorizontalLine />
        <ActionButton icon={<MoreIcon />} />
      </Actions>
    </Wrapper>
  );
}
