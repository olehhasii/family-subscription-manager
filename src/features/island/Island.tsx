import { AnimatePresence, motion, type Variants } from 'motion/react';

import { useEffect, useRef, useState } from 'react';
import { Overlay, StyledIsland, Wrapper } from './styles/Island.styles';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Menu from './components/Menu';

type Statuses = 'menu' | 'info' | 'navbar';

export default function Island() {
  const [status, setStatus] = useState<Statuses>('navbar');

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
    menu: {
      y: -100,
    },
  };

  const handleShowNavbar = () => {
    setStatus('navbar');
  };

  const handleChangeStatus = (component: Statuses) => {
    setStatus(component);
  };

  const hasPlayedIntroRef = useRef(false);
  useEffect(() => {
    hasPlayedIntroRef.current = true;
  }, []);

  return (
    <Wrapper as={motion.div} style={{ alignItems: status === 'navbar' || status === 'menu' ? 'end' : 'center' }} layout>
      {status === 'info' && <Overlay />}

      <StyledIsland as={motion.div} variants={islandVariants} initial="initial" animate={status} layout>
        <AnimatePresence mode="wait">
          {status === 'navbar' && (
            <NavBar
              onOpenInfo={() => handleChangeStatus('info')}
              onOpenMenu={() => handleChangeStatus('menu')}
              key="navbar"
              skipIntro={hasPlayedIntroRef.current}
            />
          )}
          {status === 'info' && <Info onCloseInfo={handleShowNavbar} key="info" />}
          {status === 'menu' && <Menu key="menu" onCloseMenu={handleShowNavbar} />}
        </AnimatePresence>
      </StyledIsland>
    </Wrapper>
  );
}
