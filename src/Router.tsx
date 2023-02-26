import { Routes, Route} from "react-router-dom"
import { Repositories } from "./pages/Repositories"
import { Profile } from "./pages/Profile"

export function Router(){
  return (
    <Routes>
      <Route path='/' element={<Repositories />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}