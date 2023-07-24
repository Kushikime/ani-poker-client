import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import "../../shared/index.less";

export const AppProvider = () => {
  return (
    <div className='app green'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};
