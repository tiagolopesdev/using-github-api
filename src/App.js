import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DisplayAllRepositories } from '../src/pages/displayAllRepositories/';
import { Profile } from '../src/pages/profile/';

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DisplayAllRepositories />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}