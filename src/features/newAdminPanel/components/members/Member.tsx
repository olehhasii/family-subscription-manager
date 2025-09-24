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
import { useTranslations } from '../../../../hooks/useTranslation';

interface MemberProps {
  memberData: Member;
  onEditMember: (view: AdminPanelView, id?: number) => void;
}

export default function Member({ memberData, onEditMember }: MemberProps) {
  const { t, lang } = useTranslations();
  const { id, name, paidUntil, isBillable, avatarUrl } = memberData;

  const memberStatus = getMemberStatus(paidUntil, lang);

  return (
    <MemberContainer onClick={() => onEditMember(ADMIN_VIEWS.MEMBERS_EDIT, id)} $isBillable={isBillable}>
      <MemberHeader>
        <MemberAvatar src={avatarUrl ? avatarUrl : noAvatar} />
        <MemberDetails>
          <MemberName>{name}</MemberName>
          {isBillable && (
            <MemberPaidDate>
              {paidUntil ? `Paid until ${getFormattedDate(paidUntil, lang)}` : t.notSpecified}
            </MemberPaidDate>
          )}
        </MemberDetails>
      </MemberHeader>
      <MemberStatus $variant={isBillable ? memberStatus.variant : 'special'}>
        {isBillable ? memberStatus.label : t.noNeedForPayments}
      </MemberStatus>
    </MemberContainer>
  );
}
