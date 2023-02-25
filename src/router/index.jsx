import { Router } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import { DisplayAllRepositories } from '../pages/displayAllRepositories';
import { Profile } from '../pages/profile/index';


export function Routers() {
    return (
        <Routes>
            <Router path='/' element={<DisplayAllRepositories />} />
            <Router path='/profile' element={<Profile />} />
        </Routes>
    );
}
