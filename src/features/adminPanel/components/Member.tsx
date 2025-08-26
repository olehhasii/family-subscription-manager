import { MemberBadge, MemberDate, MemberItem, MemberItemInfo, MemberName } from '../styles/Member.styles';

import type { Member, StatusKeys } from '../../../types/types';
import noAvatar from '../../../assets/avatarPlaceholder.svg';
import { checkDateStatus, getFormattedDate } from '../../../lib/dates';

interface MemberProps {
  onClick: () => void;
  memberData: Member;
}

export default function Member({ onClick, memberData }: MemberProps) {
  const { name, avatarUrl, paidUntill, shouldPay } = memberData;

  const paidUntillDate = new Date(paidUntill);
  const status = checkDateStatus(paidUntillDate);

  return (
    <MemberItem onClick={onClick}>
      <MemberItemInfo>
        <img
          src={avatarUrl ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${avatarUrl}` : noAvatar}
        />
        <div>
          <MemberName>{name}</MemberName>
          <MemberDate>Paid untill {getFormattedDate(paidUntillDate)}</MemberDate>
        </div>
      </MemberItemInfo>
      <MemberBadge $variant={status.variant as StatusKeys}>{status.label}</MemberBadge>
    </MemberItem>
  );
}
