
import './App.css';
import { Navbar } from './Components/Nav bar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSingup from './Pages/LoginSingup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<shopCategory  category="men" />}/>
        <Route path='/womens' element={<shopCategory category="women" />}/>
        <Route path='/kids' element={<shopCategory category="kid" />}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
