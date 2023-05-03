import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setNotification } from '../redux/actions';

import '../scss/create.scss';
// import axios from 'axios'

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [vendor, setVendor] = useState('');
  const [model, setModel] = useState('');
  const [os, setOs] = useState('');
  const [osVersion, setOsVersion] = useState('');
  const [image, setImage] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Toto pole je povinné.');  
  

  const createDevice = async (e) => {
    e.preventDefault();

   if(code === '' || vendor === '' || model === '' || os === '' || osVersion === ''){
    setIsRequired(true);
    return false;
   }else{
    setIsRequired(false);
   }
 
  
    const response = await fetch(
        'https://js-test-api.etnetera.cz/api/v1/phones',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Auth-Token': localStorage.getItem('token'),
          },
          body: JSON.stringify({
            code,
            os,
            vendor,
            model,
            osVersion,
            image
          })
        });

        if(response.status === 201){
            console.log('ok');
            navigate('/Devices');
            dispatch(setNotification('Zařízení bylo uspěšně přidáno'));
        }
    };

  return (
    <div>
      <main>
        <form onSubmit={createDevice} className="form-create">
          <h1>Nové zařízení</h1>
          <label style={{ display: 'none' }}>Kódové označení</label>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="Kódové označení (identifikátor)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {code === '' && isRequired && <span>{errorMsg}</span>}

          <label style={{ display: 'none' }}>Výrobce</label>
          <input
            type="text"
            name="vendor"
            id="vendor"
            placeholder="Výrobce"
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
          />
          {vendor === '' && isRequired && <span>{errorMsg}</span>}

          <label style={{ display: 'none' }}>Model</label>
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          {model === '' && isRequired && <span>{errorMsg}</span>}

          <label style={{ display: 'none' }}>Operační systém</label>
          <input
            type="text"
            name="os"
            id="os"
            placeholder="Operační systém"
            value={os}
            onChange={(e) => setOs(e.target.value)}
          />
          {os === '' && isRequired && <span>{errorMsg}</span>}

          <label style={{ display: 'none' }}>Verze OS</label>
          <input
            type="text"
            name="versionOs"
            id="versionOs"
            placeholder="Verze OS"
            value={osVersion}
            onChange={(e) => setOsVersion(e.target.value)}
          />
          {osVersion === '' && isRequired && <span>{errorMsg}</span>}

          <label style={{ display: 'none' }}>URL obrázku</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="URL obrázku"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        
          <button>Přidat zařízení</button>
        </form>
      </main>
    </div>
  );
};

export default Create;
