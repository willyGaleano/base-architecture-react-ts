import { Home } from "@presentation/pages/main/home/containers/Home"
import { Routes, Route } from "react-router-dom"
import { Login } from '../pages/authentication/Login/containers/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}
