import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminPanel from './features/adminPanel/AdminPanel';
import Board from './features/board/Board';
import Island from './features/island/Island';
import { Wrapper } from './styles/GeneralComponents.Styles';
import GlobalStyle from './styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster richColors />
      <Wrapper>
        {/* <Board />
        <Island /> */}
        <AdminPanel />
      </Wrapper>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
