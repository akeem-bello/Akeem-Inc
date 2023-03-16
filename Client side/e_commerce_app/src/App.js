import { Navigate, Route, Routes } from 'react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';
import AdminSignin from './pages/AdminSignin';
import AddItems from './pages/AddItems';
import AdminSignUp from './pages/AdminSignUp';
import Footer from './components/Footer';
import Product from './pages/Product';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';

const App = ()=>{
  const token = localStorage.token;
  const token2 = localStorage.token2;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:_id' element={<Product />} />
        <Route path='/home' element={<Navigate to='/' />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/shipping' element={token ? <Shipping /> : <Navigate to='/signin' />} />
        <Route path='/payment' element={token ? <Payment /> : <Navigate to='/signin' />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/admin-signin' element={<AdminSignin />}/>
        <Route path='/admin-signup' element={<AdminSignUp />}/>
        <Route path='/admin/add-items' element={token2 ? <AddItems /> : <Navigate to='/admin-signin'/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes> 
      <Footer />     
    </>
  );
}

export default App;
