import { Navigate, Route, Routes } from 'react-router';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import PageNotFound from './components/PageNotFound';

const App = ()=>{
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Navigate to='/' />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>      
    </>
  );
}

export default App;
