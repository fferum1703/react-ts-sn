import React from "react";
import c from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={c.header}>
      <img  alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VOIJTKhQNgBLepC2ZrFqrEJ4s8fKh0FySbaKu-kQk9IHaRPOo8h6nQ6oglSQX4GxciM&usqp=CAU"/>
      <div className={c.loginBlock}>
        <NavLink to={'/login'}>LOGIN</NavLink>
      </div>
    </header>
   
  );
};

export {
  Header
}