import {
  PaidUntil,
  PaidUntilPlaceholderText,
  StyledBoardUser,
  UserHeader,
  UserInfo,
  UserName,
} from '../styles/BoardUser.styles';

import avatarImg from '../../../assets/avatar2.png';

export default function BoardUser() {
  return (
    <StyledBoardUser>
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
