import { motion, type Variants } from 'motion/react';
import { StyledIsland } from './Island.styles';
import NavBar from '../IslandContent/NavBar';
import Info from '../IslandContent/Info';
import { useState } from 'react';

export default function Island() {
  const [status, setStatus] = useState<'navbar' | 'info' | 'menu'>('navbar');

  const islandVariants: Variants = {
    initial: { x: '-50%', y: 100 },
    navbar: { x: '-50%', y: 0 },
    info: { x: '-50%', y: -500 },
  };

  const handleOpenInfo = () => {
    setStatus('info');
  };

  const handleCloseInfo = () => {
    setStatus('navbar');
  };

  return (
    <StyledIsland as={motion.div} variants={islandVariants} initial="initial" animate={status}>
      {status === 'navbar' && <NavBar onOpenInfo={handleOpenInfo} />}
      {status === 'info' && <Info onCloseInfo={handleCloseInfo} />}
    </StyledIsland>
  );
}
