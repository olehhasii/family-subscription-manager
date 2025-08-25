import AdminPanel from './features/adminPanel/AdminPanel';
import Board from './features/board/Board';
import Island from './features/island/Island';
import { Wrapper } from './styles/GeneralComponents.Styles';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Wrapper>
        {/* <Board />
        <Island /> */}
        <AdminPanel />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
