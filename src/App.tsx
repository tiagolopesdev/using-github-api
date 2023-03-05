import { BrowserRouter } from 'react-router-dom';
import { UserProfileProvider } from './context/user';
import { Router } from './Router';

export const App = () => {
  return (
    <BrowserRouter>
      <UserProfileProvider>
        <Router/>
      </UserProfileProvider>
    </BrowserRouter>
  );
}

