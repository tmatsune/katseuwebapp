import React from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './pages/nav/navbar';
import HomePage from './pages/home/homePage';
import LoginPage from './pages/login/loginPage';
import ShoppingPage from './pages/shopping/shoppingPage';
import CheckoutPage from './pages/checkout/checkoutPage';
import ClothesType from './pages/type/clothesType';
import { useContext } from 'react';
import './App.css';
import SUN from './images/sun.png';
import MOON1 from './images/moon6.png'
import { ThemeContext } from './context/themeContext';

function App() {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  function toggle():void{
    if(darkMode){
      setDarkMode(false);
    }else{
      setDarkMode(true);
    }
  }

  return (
    <div className="App">
      <div className={darkMode ? 'dark' : 'light'}>
      <span id={darkMode ? 'check' : 'check2'} onClick={toggle}>
        {
          darkMode ? (<img alt='' id='sun' src={SUN}></img>) : (<img alt='' id='moon' src={MOON1}></img>)
        }
      </span>
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="/shop" element={<ShoppingPage></ShoppingPage>}></Route>
          <Route path="/type/*" element={<ClothesType></ClothesType>}></Route>
          <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
