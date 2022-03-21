import React , {useState} from 'react';
import "../scss/devices.scss"
import data from "../data/data.json"
import image from "../assets/no-image.png"
import { MdSearch } from "react-icons/md";


const Devices = () => {


    const [devices, setDevices] = useState(data)
    return (
        <main>
                <div className="search-bar">
                    <div className="search-os">
                        <p>Systém</p>
                        <input
                            type="text" 
                            placeholder="Nezáleží">
                        </input>
                    </div>
                    <div className="search-producer">
                        <p>Výrobce</p>
                        <input
                            type="text" 
                            placeholder="Nezáleží">
                        </input>
                    </div>
                    <div className="search-checkbox">
                        <input
                            type="checkbox" 
                            placeholder="Nezáleží">
                        </input>
                        <p>Jen dostupné</p>
                    </div>
                    <div className="search-model">
                        <MdSearch/>
                        <input
                            type="text" 
                            placeholder="Hledat model">
                        </input>
                       
                    </div>
                </div>
            <div className="main-devices">
                {devices.map((device) => (
                    <div key={device.id} className="device-div">
                        <img src = {image} className="device-img" alt="logo" />
                        <div className="device-info">
                        <h1>{device.model}</h1>
                            <p>{device.producer}</p>
                            <p className="p-os">{device.os}/{device.versionOs}</p>
                        </div>   
                        <button id="btn-device">Půjčit</button>
                    </div>
                ))}

            </div>
        </main>
    )
}

export default Devices; 