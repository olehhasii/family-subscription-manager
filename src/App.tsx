import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Wrapper } from './styles/GeneralComponents.Styles';
import GlobalStyle from './styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import AdminPanel from './features/newAdminPanel/AdminPanel';
import { BrowserRouter, Route, Routes } from 'react-router';
import PublicBoard from './pages/PublicBoard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster richColors />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route index element={<PublicBoard />} />
            <Route path="admin" element={<AdminPanel />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
