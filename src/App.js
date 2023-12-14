import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Checkout from './pages/checkout/checkout';
import ShopContextProvider from './context/shopContext';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Shop/> }></Route>
          <Route path='/cart' element={ <Cart/> }></Route>
          <Route path='/checkout' element={ <Checkout/> }></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
