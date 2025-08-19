import { style } from 'motion/react-client';
import styled from 'styled-components';
import AdminPanelButton from '../../ui/AdminPanelButton';

export const StyledAdminPanel = styled.div`
  color: var(--color-text-primary);
  background-color: var(--color-bg-main);
  border-radius: var(--spacing-28);

  display: flex;
`;

export const BoardSide = styled.div`
  padding: var(--spacing-24);
  border-right: var(--border);
`;

export const BoardNav = styled.div`
  display: flex;
  gap: var(--spacing-12);
`;

export const BoardNavButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: var(--color-text-primary);
  font-size: 18px;
  cursor: pointer;
`;

export const BoardSideContent = styled.div`
  margin-top: var(--spacing-16);
`;

export const BoardMembersList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  margin-top: var(--spacing-16);
`;

export const BoardPanelContent = styled.div`
  padding: var(--spacing-24);
`;

export default function AdminPanel() {
  return (
    <StyledAdminPanel>
      <BoardSide>
        <BoardNav>
          <BoardNavButton>Members</BoardNavButton>
          <BoardNavButton>Board Settings</BoardNavButton>
        </BoardNav>
        <BoardSideContent>
          <AdminPanelButton label="+ Add Member" />
          <BoardMembersList>
            <li>
              <div>
                <img />
                <span>Oleh</span>
                <span>Untill Sep 2025</span>
              </div>
              <span>Up to date</span>
            </li>
            <li>
              <div>
                <img />
                <span>Oleh</span>
                <span>Untill Sep 2025</span>
              </div>
              <span>Up to date</span>
            </li>
            <li>
              <div>
                <img />
                <span>Oleh</span>
                <span>Untill Sep 2025</span>
              </div>
              <span>Up to date</span>
            </li>
          </BoardMembersList>
        </BoardSideContent>
      </BoardSide>
      <BoardPanelContent>Content</BoardPanelContent>
    </StyledAdminPanel>
  );
}
