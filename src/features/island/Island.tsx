import { AnimatePresence, motion, type Variants } from 'motion/react';

import { useEffect, useRef, useState } from 'react';
import { StyledIsland } from './styles/Island.styles';
import NavBar from './components/NavBar';
import Info from './components/Info';
import Menu from './components/Menu';
import { createPortal } from 'react-dom';
import AdminLogin from '../auth/AdminLogin';

type Statuses = 'menu' | 'info' | 'navbar';

export default function Island() {
  const [status, setStatus] = useState<Statuses>('navbar');
  const [isInfoOpened, setIsInfoOpened] = useState(false);
  const [isAuthOpened, setIsAuthOpened] = useState(false);

  const islandVariants: Variants = {
    initial: { y: 400 },
    navbar: {
      y: 0,
      transition: {
        y: { duration: 0.5, type: 'spring', bounce: 0.3 },
      },
    },
    info: {
      y: 0,
    },
    menu: {
      y: 0,
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
    <>
      <StyledIsland as={motion.div} variants={islandVariants} initial="initial" animate={status} layout>
        <AnimatePresence mode="wait">
          {status === 'navbar' && (
            <NavBar
              onOpenInfo={() => setIsInfoOpened(true)}
              onOpenMenu={() => handleChangeStatus('menu')}
              key="navbar"
              skipIntro={hasPlayedIntroRef.current}
            />
          )}

          {status === 'menu' && (
            <Menu key="menu" onCloseMenu={handleShowNavbar} onOpenAdminLogin={() => setIsAuthOpened(true)} />
          )}
        </AnimatePresence>
        {createPortal(
          <AnimatePresence mode="wait" initial={false}>
            {isInfoOpened && <Info key="info" onCloseInfo={() => setIsInfoOpened(false)} />}
          </AnimatePresence>,
          document.getElementById('info') as Element
        )}
        {createPortal(
          <AnimatePresence mode="wait" initial={false}>
            {isAuthOpened && <AdminLogin key="admin" onCloseForm={() => setIsAuthOpened(false)} />}
          </AnimatePresence>,
          document.getElementById('info') as Element
        )}
      </StyledIsland>
    </>
  );
}
