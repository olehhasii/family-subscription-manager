import styled from 'styled-components';

export const PanelContent = styled.div`
  min-width: 400px;
  padding: var(--spacing-24);
  border-left: var(--border);

  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: var(--text-xl);
    font-weight: 700;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    max-width: 352px;
  }
`;
