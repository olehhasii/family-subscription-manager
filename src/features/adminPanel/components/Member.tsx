import { MemberBadge, MemberDate, MemberItem, MemberItemInfo, MemberName } from '../styles/Member.styles';

import testImg from '../../../assets/avatar2.png';

export default function Member() {
  const badgeVariants = {
    success: {
      color: 'var(--color-green)',
    },
    danger: {
      color: 'var(--color-red)',
    },
    due: {
      color: 'var(--color-yellow)',
    },
  };

  return (
    <MemberItem>
      <MemberItemInfo>
        <img src={testImg} />
        <div>
          <MemberName>Oleh</MemberName>
          <MemberDate>Untill Sep 2025</MemberDate>
        </div>
      </MemberItemInfo>
      <MemberBadge $color={badgeVariants['success'].color}>Up to date</MemberBadge>
    </MemberItem>
  );
}
