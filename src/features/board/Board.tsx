import { easeOut, type Variants } from 'motion';
import BoardUser from './components/BoardUser';
import { BoardHeader, BoardUsers, StyledBoard } from './styles/Board.styles';
import { motion } from 'motion/react';
import useMembers from '../../hooks/useMembers';
import useGroup from '../../hooks/useGroup';

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

  const { members, isError: isMembersError } = useMembers();
  const { groupSettings, isError: isGroupSettingsError } = useGroup();

  if (isMembersError || isGroupSettingsError) {
    return <p>Error Loading Members</p>;
  }

  return (
    <StyledBoard as={motion.div} variants={boardVariants} initial="hidden" animate="visible">
      <BoardHeader>
        <h2>{groupSettings?.groupName}</h2>
        <span>{`${groupSettings?.membershipPrice} ${groupSettings?.currency}`} / month</span>
      </BoardHeader>
      <BoardUsers>
        {members?.map((member) => (
          <BoardUser user={member} key={member.id} />
        ))}
      </BoardUsers>
    </StyledBoard>
  );
}
