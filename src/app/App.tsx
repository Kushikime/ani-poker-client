import { Button, Input } from '../shared/ui';

export const App = () => {
  return (
    <div className="app green">
      <div>
        <Input type="text" placeholder="email or username" />
        <Input type="password" placeholder="password" />
        <Button size="medium">Create room</Button>
      </div>
    </div>
  );
};
