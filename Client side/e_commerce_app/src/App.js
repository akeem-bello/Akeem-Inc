import { Navigate, Route, Routes } from 'react-router';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';
import AdminSignin from './components/AdminSignin';
import AddItems from './components/AddItems';
import AdminSignUp from './components/AdminSignUp';

const App = ()=>{
  const token2 = localStorage.token2;
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Navigate to='/' />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/admin-signin' element={<AdminSignin />}/>
        <Route path='/admin-signup' element={<AdminSignUp />}/>
        <Route path='/admin/add-items' element={token2 ? <AddItems /> : <Navigate to='/admin-signin'/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>      
    </>
  );
}

export default App;
