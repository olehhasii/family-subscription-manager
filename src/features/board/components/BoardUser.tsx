import { StyledBoardUser, UserHeader, UserInfo, UserName, UserPaidDate, UserStatus } from '../styles/BoardUser.styles';

import noAvatar from '../../../assets/avatarPlaceholder.svg';
import type { Variants } from 'motion';
import { easeOut, motion } from 'motion/react';
import type { Member } from '../../../types/membersTypes';
import { getFormattedDate } from '../../../lib/dates';
import { getMemberStatus } from '../../../lib/helpers';
import { useTranslations } from '../../../hooks/useTranslation';

interface BoardUserProps {
  user: Member;
}

export default function BoardUser({ user }: BoardUserProps) {
  const { t, lang } = useTranslations();

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

  const { name, paidUntil, isBillable, avatarUrl } = user;
  const memberStatus = getMemberStatus(paidUntil, lang);

  return (
    <StyledBoardUser as={motion.div} variants={boardUserVariants}>
      <UserHeader>
        <img src={avatarUrl ? avatarUrl : noAvatar} alt="User" />
        <UserInfo>
          <UserName>{name}</UserName>
          {isBillable && (
            <UserPaidDate $variant={isBillable ? memberStatus.variant : 'special'}>
              {paidUntil ? `${t.paidUntil} ${getFormattedDate(paidUntil, lang)}` : t.notSpecified}
            </UserPaidDate>
          )}
        </UserInfo>
      </UserHeader>

      <UserStatus $variant={isBillable ? memberStatus.variant : 'special'}>
        {isBillable ? memberStatus.label : t.noNeedForPayments}
      </UserStatus>
    </StyledBoardUser>
  );
}
