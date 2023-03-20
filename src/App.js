import './App.css';
import React, { useEffect } from 'react'
import {createContext,useState} from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import Navbar from '../src/Components/Navbar'
import Home from '../src/Components/Home'
import Product from '../src/Components/Product/Product'
import User from '../src/Components/User'
import ContactUs from '../src/Components/ContactUs'
import Login from '../src/Components/Login'
import ProductDetails from './Components/Product/ProductDetails';
import { Category } from './Contstant/Category';
// import {useDispatch} from 'react-redux'
// import { catagaryData } from './redux/action';
export const GlobaleData= createContext()

function App() {
  // const dispatch=useDispatch();
  const location=useLocation()
  const [category,setCategory]=useState([]);
  const [login,logout]=useState(true)

useEffect(()=>{
  Category(setCategory)
  // dispatch(catagaryData(category))
},[])

  return (
    <div className="App">
      {location.pathname !== '/' && <Navbar logout={logout}/>}
     <GlobaleData.Provider value={{category,login,logout}} >
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='productDetails/:id' element={<ProductDetails/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/contactUs' element={<ContactUs/>}/>
      </Routes>
     </GlobaleData.Provider>
      
    </div>
  );
}

export default App;
