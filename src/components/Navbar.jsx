import React, { useState } from 'react'
import UserSigned from './UserSigned';
import Login from '../forms/Login';
import Register from '../forms/Register';
import Forgot from '../forms/Forgot';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Bids from './Bids';
import Funds from './Funds';

const Navbar = () => {
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [forgot, setForgot] = useState(false)
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Orders':
                return <Orders />;
            case 'Holdings':
                return <Holdings />;
            case 'Positions':
                return <Positions />;
            case 'Bids':
                return <Bids />;
            case 'Funds':
                return <Funds />;
            default:
                return <Dashboard />;
        }
    };


    return (
        <div>
            <UserSigned setLogin={setLogin} setRegister={setRegister} setActiveComponent={setActiveComponent} />
            {login ? (<Login setLogin={setLogin} setRegister={setRegister} setForgot={setForgot} />) : (null)}
            {register ? (<Register setRegister={setRegister} setLogin={setLogin} setForgot={setForgot} />) : (null)}
            {forgot ? (<Forgot setForgot={setForgot} setLogin={setLogin} setRegister={setRegister} />) : (null)}
            <div className="p-4">{renderComponent()}</div>
        </div>
    )
}

export default Navbar