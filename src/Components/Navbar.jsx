// import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS_files/Navbar.css'


const Navbar = ({logout}) => {
       
  return (
    <div className='navbar'>
      <ul>
<NavLink to={'/home'}>
        <li>Home</li>

</NavLink>
<NavLink to={'/product'}>
        <li>Product</li>

</NavLink>
<NavLink to={'/user'}>
        <li>Users</li>

</NavLink>
<NavLink to={'/contactUs'}>
        <li>Contact</li>

</NavLink>
<NavLink to={'/'}>
        <li onClick={()=>{
                logout(true)
        }}>logout</li>

</NavLink>
      </ul>
    </div>
  )
}

export default Navbar