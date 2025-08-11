import { motion } from 'motion/react';
import { StyledIsland } from './Island.styles';
import NavBar from '../IslandContent/NavBar';
import Info from '../IslandContent/Info';
import { useState } from 'react';

export default function Island() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <StyledIsland
      as={motion.div}
      initial={{ translateY: 100 }}
      animate={{ translateY: 0 }}
      style={{ translateX: '-50%' }}
    >
      {!isInfoOpen && <NavBar></NavBar>}
      {isInfoOpen && <Info />}
    </StyledIsland>
  );
}
