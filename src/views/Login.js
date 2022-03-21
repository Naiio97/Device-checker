import React ,{useState} from 'react'
import axios from 'axios'
import '../scss/login.scss'

const Login = () =>{ 
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {username, password}

        axios.post('https://js-test-api.etnetera.cz/api/v1/login', data).then(
          res => {
              console.log(res);
          }
        ).catch (
            err => {
             console.log(err);
            }
        )
    }
      
    return (
        <div className="form-login">
            <h1>Příhlášení</h1>
            <p>Po přihlášení si budeš moct pujčit telefon, případně vložit nový.</p>
            <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Přihlašovací jméno">
                    </input> <br />

                    <input
                        type="password" 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Heslo">
                    </input> <br />

                <button
                        type="submit">
                        Přihlásit se
                </button>
             </form>
        </div>
      
        
    )
}


export default Login;

