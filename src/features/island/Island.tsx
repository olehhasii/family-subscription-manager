import { AnimatePresence, motion, type Variants } from 'motion/react';

import { useEffect, useRef, useState } from 'react';
import { Overlay, StyledIsland, Wrapper } from './styles/Island.styles';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Menu from './components/Menu';

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
        {/* <AnimatePresence mode="wait">
          {status === 'navbar' && (
            <NavBar onOpenInfo={handleOpenInfo} key="navbar" skipIntro={hasPlayedIntroRef.current} />
          )}
          {status === 'info' && <Info onCloseInfo={handleCloseInfo} key="info" />}
        </AnimatePresence> */}
        <Menu />
      </StyledIsland>
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
