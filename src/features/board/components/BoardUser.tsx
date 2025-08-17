import {
  PaidUntil,
  PaidUntilPlaceholderText,
  StyledBoardUser,
  UserHeader,
  UserInfo,
  UserName,
} from '../styles/BoardUser.styles';

import avatarImg from '../../../assets/avatar2.png';
import type { Variants } from 'motion';
import { easeOut, motion } from 'motion/react';

export default function BoardUser() {
  const boardUserVariants: Variants = {
    hidden: {
      y: 200,
      filter: 'blur(30px)',
      opacity: 0.1,
    },
    visible: {
      y: 0,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { ease: easeOut, duration: 0.3 },
    },
  };

  return (
    <StyledBoardUser as={motion.div} variants={boardUserVariants}>
      <UserHeader>
        <img src={avatarImg} alt="User" />
        <UserInfo>
          <UserName>Oleh</UserName>
          <span>Up to date</span>
        </UserInfo>
      </UserHeader>

      <PaidUntil>
        <PaidUntilPlaceholderText>Paid untill</PaidUntilPlaceholderText>
        <span>September 2025</span>
      </PaidUntil>
    </StyledBoardUser>
  );
}
