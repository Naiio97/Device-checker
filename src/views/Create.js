import React ,{useState} from 'react'
import { nanoid } from 'nanoid'
import data from "../data/data.json"
import '../scss/create.scss'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'



const Create = () => {

    
    // useEffect(() => {
    //     if (localStorage.getItem('')) {
    //         navigate.push("/devices")
    //     }
    // }, [])

    //  axios.post('https://js-test-api.etnetera.cz/api/v1/phones', data).then(
    //       res => {
    //           console.log(res);
    //       }
    //     ).catch (
    //         err => {
    //          console.log(err);
    //         }
    //     )
    //  }
  

    const [addFormData, setAddFormData] = useState({
        identifier: '',
        producer: '', 
        model: '',
        os: '',
        versionOs: '',
        img: ''
    }) 

    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newDevice = {
            id: nanoid(),
            identifier: addFormData.identifier,
            producer: addFormData.producer, 
            model: addFormData.model,
            os: addFormData.os,
            versionOs: addFormData.versionOs,
            img: addFormData.img
        };

        
    };

    return (
        <div className="form-create">
            <h1>Nové zařízení</h1>
        
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="identifier"
                    onChange={handleAddFormChange}
                    placeholder="Kódové označní (identifikátor)">
                </input> <br />

                <input
                    type="text"
                    name="producer"
                    onChange={handleAddFormChange}
                    placeholder="Výrobce">
                </input> <br />

                <input
                    type="text"
                    name="model"
                    onChange={handleAddFormChange}
                    placeholder="Model">
                </input> <br />

                <input
                    type="text"
                    name="os"
                    onChange={handleAddFormChange}
                    placeholder="Operační systém">
                </input> <br />

                <input
                    type="text"
                    name="versionOs"
                    onChange={handleAddFormChange}
                    placeholder="Verze operačního systému">
                </input> <br />

                <input
                    type="text"
                    name="img"
                    onChange={handleAddFormChange} 
                     placeholder="Obrázek">
                </input> <br />

                <button
                    type="submit">
                    Přidat zařízení
                </button>
            </form>
        </div>
    )

}

export default Create; 