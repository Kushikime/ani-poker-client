import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export const AppProvider = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
