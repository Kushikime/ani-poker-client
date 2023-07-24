import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from './ThemeProvider';

export const AppProvider = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
};
