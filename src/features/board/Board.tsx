import { easeOut, type Variants } from 'motion';
import BoardUser from './components/BoardUser';
import { BoardHeader, BoardUsers, StyledBoard } from './styles/Board.styles';
import { motion } from 'motion/react';

export default function Board() {
  const boardVariants: Variants = {
    hidden: {
      y: 700,
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        y: { duration: 0.5, type: 'spring', bounce: 0.2, delay: 1 },
        default: { ease: easeOut, duration: 0.2, delay: 1 },
        delayChildren: 1.1,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  return (
    <StyledBoard as={motion.div} variants={boardVariants} initial="hidden" animate="visible">
      <BoardHeader>
        <h2>Payment Statuses</h2>
        <span>$7.49 / month</span>
      </BoardHeader>
      <BoardUsers>
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
      </BoardUsers>
    </StyledBoard>
  );
}
