import Board from './features/board/Board';
import Island from './features/island/Island';
import { Wrapper } from './styles/GeneralComponents.Styles';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Wrapper>
        <Board />
        <Island />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
