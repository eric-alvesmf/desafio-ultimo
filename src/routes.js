// import Main from './pages/Main';
import MainCards from './pages/MainCards';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />





      <Route element={<ProtectedRoutes redirectTo='/' />}>

        <Route path='/signup' element={<SignUp />} />

        <Route path='/addProduct' element={<AddProduct />} />

        <Route path='/maincards' element={<MainCards />} />



        {/* <Route path='/teacher/:id' element={<teacherDetail />} /> */}
      </Route>
    </Routes>
  )

}

export default MainRoutes;