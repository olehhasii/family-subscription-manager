import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Wrapper } from './styles/GeneralComponents.Styles';
import GlobalStyle from './styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import AdminPanel from './features/newAdminPanel/AdminPanel';
import { BrowserRouter, Route, Routes } from 'react-router';
import PublicBoard from './pages/PublicBoard';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './features/auth/ProtectedRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import LanguageProvider from './contexts/LanguageContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster richColors />
          <BrowserRouter>
            <AuthProvider>
              <Wrapper>
                <Routes>
                  <Route index element={<PublicBoard />} />
                  <Route
                    path="admin"
                    element={
                      <ProtectedRoute>
                        <AdminPanel />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Wrapper>
            </AuthProvider>
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
