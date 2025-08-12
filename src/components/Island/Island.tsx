import { AnimatePresence, motion, type Variants } from 'motion/react';
import { Overlay, StyledIsland, Wrapper } from './Island.styles';
import NavBar from '../IslandContent/NavBar';
import Info from '../IslandContent/Info';
import { useEffect, useRef, useState } from 'react';

export default function Island() {
  const [status, setStatus] = useState<'navbar' | 'info' | 'menu'>('navbar');

  const islandVariants: Variants = {
    initial: { y: 200 },
    navbar: {
      y: -100,
      transition: {
        y: { duration: 0.5, type: 'spring', bounce: 0.4 },
        width: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
        height: { duration: 0.3, delay: 0.5, ease: 'easeOut' },
      },
    },
    info: {
      y: 0,
    },
  };

  const handleOpenInfo = () => {
    setStatus('info');
  };

  const handleCloseInfo = () => {
    setStatus('navbar');
  };

  const hasPlayedIntroRef = useRef(false);
  useEffect(() => {
    hasPlayedIntroRef.current = true;
  }, []);

  return (
    <Wrapper as={motion.div} style={{ alignItems: status === 'navbar' ? 'end' : 'center' }} layout>
      {status === 'info' && <Overlay />}

      <StyledIsland as={motion.div} variants={islandVariants} initial="initial" animate={status} layout>
        <AnimatePresence mode="wait">
          {status === 'navbar' && (
            <NavBar onOpenInfo={handleOpenInfo} key="navbar" skipIntro={hasPlayedIntroRef.current} />
          )}
          {status === 'info' && <Info onCloseInfo={handleCloseInfo} key="info" />}
        </AnimatePresence>
      </StyledIsland>
    </Wrapper>
  );
}
