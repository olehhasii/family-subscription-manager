import { AnimatePresence, motion, type Variants } from 'motion/react';
import { Overlay, StyledIsland, Wrapper } from './Island.styles';
import NavBar from '../IslandContent/NavBar';
import Info from '../IslandContent/Info';
import { useState } from 'react';

export default function Island() {
  const [status, setStatus] = useState<'navbar' | 'info' | 'menu'>('navbar');

  const islandVariants: Variants = {
    initial: { y: 200, width: 40, height: 30 },
    navbar: {
      y: -100,
      width: 360,
      height: 60,
      transition: {
        y: { duration: 0.5, type: 'spring', bounce: 0.4 },
        width: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        height: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        delayChildren: 0.7,
      },
    },
    info: {
      y: 0,
      width: 360,
      height: 500,
    },
  };

  const handleOpenInfo = () => {
    setStatus('info');
  };

  const handleCloseInfo = () => {
    setStatus('navbar');
  };

  return (
    <Wrapper
      as={motion.div}
      style={{ alignItems: status === 'navbar' ? 'end' : 'center' }}
      transition={{ layout: { duration: 10 } }}
      layout
    >
      {status === 'info' && <Overlay />}
      <AnimatePresence mode="wait">
        <StyledIsland as={motion.div} variants={islandVariants} initial="initial" animate={status} layout>
          {status === 'navbar' && <NavBar onOpenInfo={handleOpenInfo} key="info" />}
          {status === 'info' && <Info onCloseInfo={handleCloseInfo} />}
        </StyledIsland>
      </AnimatePresence>
    </Wrapper>
  );
}
