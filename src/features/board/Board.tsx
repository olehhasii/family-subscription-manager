import BoardUser from './components/BoardUser';
import { BoardHeader, BoardUsers, StyledBoard } from './styles/Board.styles';

export default function Board() {
  return (
    <StyledBoard>
      <BoardHeader>
        <h2>Payment Statuses</h2>
        <span>$7.49 / month</span>
      </BoardHeader>
      <BoardUsers>
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
        <BoardUser />
      </BoardUsers>
    </StyledBoard>
  );
}
