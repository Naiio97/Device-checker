import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../scss/login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://js-test-api.etnetera.cz/api/v1/login',
      {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.id);
      navigate('/devices');
    } else if (response.status === 401) {
      setError({message: 'Špatné jméno nebo heslo'});
    } 
  };

  return (
    <div className="form-login">
      <h1>Příhlášení</h1>
      <p>Po přihlášení si budeš moct pujčit telefon, případně vložit nový.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Přihlašovací jméno"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="heslo"
          id="password"
          placeholder="Heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <p className="error">{error.message}</p>
        <button type="submit">Přihlásit se</button>
      </form>
    </div>
  );
};

export default Login;
