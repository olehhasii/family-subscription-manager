import { motion } from 'motion/react';
import { StyledIsland } from './Island.styles';
import NavBar from '../IslandContent/NavBar';
import Info from '../IslandContent/Info';
import { useState } from 'react';

export default function Island() {
  const [status, setStatus] = useState<'initial' | 'info' | 'menu'>('initial');

  const handleOpenInfo = () => {
    setStatus('info');
  };

  const handleCloseInfo = () => {
    setStatus('initial');
  };

  return (
    <StyledIsland
      as={motion.div}
      initial={{ translateY: 100 }}
      animate={{ translateY: 0 }}
      style={{ translateX: '-50%' }}
    >
      {status === 'initial' && <NavBar onOpenInfo={handleOpenInfo} />}
      {status === 'info' && <Info onCloseInfo={handleCloseInfo} />}
    </StyledIsland>
  );
}
