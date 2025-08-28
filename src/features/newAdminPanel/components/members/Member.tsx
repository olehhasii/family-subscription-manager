import type { Member } from '../../../../types/membersTypes';
import noAvatar from '../../../../assets/avatarPlaceholder.svg';
import {
  MemberAvatar,
  MemberContainer,
  MemberDetails,
  MemberHeader,
  MemberName,
  MemberPaidDate,
  MemberStatus,
} from '../../styles/members/Member.styles';
import { getMemberStatus } from '../../../../lib/helpers';
import { getFormattedDate } from '../../../../lib/dates';
import { ADMIN_VIEWS, type AdminPanelView } from '../../../../types/adminTypes';

interface MemberProps {
  memberData: Member;
  onEditMember: (view: AdminPanelView, id?: number) => void;
}

export default function Member({ memberData, onEditMember }: MemberProps) {
  const { id, name, paidUntil, shouldPay, avatarUrl } = memberData;

  const memberStatus = getMemberStatus(paidUntil);

  return (
    <MemberContainer onClick={() => onEditMember(ADMIN_VIEWS.MEMBERS_EDIT, id)}>
      <MemberHeader>
        <MemberAvatar
          src={avatarUrl ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${avatarUrl}` : noAvatar}
        />
        <MemberDetails>
          <MemberName>{name}</MemberName>
          {shouldPay && <MemberPaidDate>Paid until {getFormattedDate(paidUntil)}</MemberPaidDate>}
        </MemberDetails>
      </MemberHeader>
      <MemberStatus $variant={shouldPay ? memberStatus.variant : 'special'}>
        {shouldPay ? memberStatus.label : '💲Special Terms'}
      </MemberStatus>
    </MemberContainer>
  );
}
