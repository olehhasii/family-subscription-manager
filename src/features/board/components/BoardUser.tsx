import {
  PaidUntil,
  PaidUntilPlaceholderText,
  StyledBoardUser,
  UserHeader,
  UserInfo,
  UserName,
} from '../styles/BoardUser.styles';

export default function BoardUser() {
  return (
    <StyledBoardUser>
      <UserHeader>
        <span>😎</span>
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
