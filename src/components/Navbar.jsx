import React, { useState } from 'react'
import UserSigned from './UserSigned';
import Login from '../forms/Login';
import Register from '../forms/Register';
import Forgot from '../forms/Forgot';

const Navbar = () => {
    const [login, setLogin] = useState(false) 
    const [register, setRegister] = useState(false) 
    const [forgot, setForgot] = useState(false) 

    return (
        <div>
            <UserSigned setLogin={setLogin}/>
            {login ? (<Login setLogin={setLogin} setRegister={setRegister} setForgot={setForgot} />) : (null)}
            {register ? (<Register setRegister={setRegister} setLogin={setLogin} setForgot={setForgot} />) : (null)}
            {forgot ? (<Forgot setForgot={setForgot} setLogin={setLogin} setRegister={setRegister} />) : (null)}
        </div>
    )
}

export default Navbar