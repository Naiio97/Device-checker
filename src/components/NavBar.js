import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { setIsLogged, setIsAdmin } from '../redux/actions';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineFilter } from 'react-icons/ai';

import '../scss/navBar.scss';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);
  const isLogged = useSelector((state) => state.isLogged);

  const responsiveMenu = () => {
    let iconM = document.querySelector('.bar');
    let iconS = document.querySelector('.search-bar');
    if (iconM.className === 'bar') {
      iconM.className += ' responsive-menu';
      if (iconS.classList.contains('responsive-search')) {
        iconS.classList.remove('responsive-search');
      }
    } else {
      iconM.className = 'bar';
    }
  };

  const responsiveFilter = () => {
    let iconM = document.querySelector('.bar');
    let iconS = document.querySelector('.search-bar');
    if (iconS.className === 'search-bar') {
      iconS.className += ' responsive-search';
      if (iconM.classList.contains('responsive-menu')) {
        iconM.classList.remove('responsive-menu');
      }
    } else {
      iconS.className = 'search-bar';
    }
  }

  const logout = () => {
    dispatch(setIsLogged(false));
    dispatch(setIsAdmin(false));
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    navigate('/');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setIsLogged(true));
    } else {
      dispatch(setIsLogged(false));
    }
  }, [dispatch]);

  let email = localStorage.getItem('email');

  return (
    <header>
      <button className="mobile-icon" onClick={responsiveFilter}>
        <AiOutlineFilter />
      </button>
      <div className="bar">
        <span className="userEmail">{email}</span>
        {!isLogged ? (
          <button className="log">Přihlásit</button>
        ) : (
          <button className="log" onClick={logout}>
            Odhlásit
          </button>
        )}
        {isAdmin && (
          <NavLink to="/Create" className="add">
            Přidat zařízení
          </NavLink>
        )}
      </div>
      <button className="hamburger" onClick={responsiveMenu}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default NavBar;
