import { Button, Input } from '../shared/ui';

import { Auth } from '../features/auth';

export const App = () => {
  return (
    <div className="app green">
      <Auth />
    </div>
  );
};
