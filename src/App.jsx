import React, { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Login from './Components/Login';
import Cart from './Components/Cart';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  const [cartItems,setCartItems] = useState([])
  const [userName,setUserName]= useState('Guest')
  return (
    <div className='App'>
      <header>
        <div id='User_Profile'>
          <table>
            <tr>
              <td><img src='https://th.bing.com/th/id/OIP.JqejJ8zEszVxLlpwhvKybQHaHa?w=220&h=220&c=7&r=0&o=5&dpr=1.4&pid=1.7' alt='' id='User_Image'/></td>
              <td><h3>{userName}</h3></td>
            </tr>
          </table>

        </div>
        <div id='Nav_Files'>
          <table>
            <tr>
              <td><b><Link to="/Home" className='Nav_Link'>Home</Link></b></td>
              <br />
              <td><b><Link to="/About" className='Nav_Link'>About</Link></b></td>
              <br />
              <td><b><Link to="/Login" className='Nav_Link'>Login</Link></b></td>
              <br />
              <td><b><Link to="/Cart" className='Nav_Link'>Cart</Link></b></td>
            </tr>
          </table>
        </div>
      </header>

      <Routes>
      <Route path='/' element={<Main setCartItems={setCartItems} />} /> 
      <Route path='/Home' element={<Main setCartItems={setCartItems} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login setName={setUserName} />} />
        <Route path='/Cart' element={<Cart myCart={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
