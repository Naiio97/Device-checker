import React, {useEffect} from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setIsLogged, setIsAdmin } from '../redux/actions';
import logo from '../assets/logo.svg';

import '../scss/navBar.scss';

const NavBar = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const isAdmin = useSelector((state) => state.isAdmin);
const isLogged = useSelector((state) => state.isLogged);

const redirectToCreateDevice = () => {
  navigate('/Create');
};

const redirectToDevice = () => {
  navigate('/Devices');
};

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
}, []);

let email = localStorage.getItem('email'); 

  return (
    <header>
      <div className="bar">
        <Link to={'/Devices'}>
          <img src={logo} alt="logo" />
        </Link>
      <span className="userEmail">{email}</span>
        {!isLogged ? (
          <button className="log">Přihlásit</button>
        ) : (
          <button className="log" onClick={logout}>
            {' '}
            Odhlásit{' '}
          </button>
        )}
        {isAdmin && (
          <button className="add" onClick={redirectToCreateDevice}>
            Přidat zařízení
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
