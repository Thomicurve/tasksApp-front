import React from 'react'
import UseCookie from '../../hooks/useCookie'
import { logout } from '../../services/authServices'

import { Link, useHistory } from 'react-router-dom'

import './styles.scss'
export default function Navbar() {
    const history = useHistory();
    const [cookieValue,, removeCookie] = UseCookie();


    const verifyLogout = ({message}) =>{
        if(message !== 'logout successfull'){
            return console.error(message)
        }
            
        removeCookie();
        history.push('/login');
        window.location.reload();
    }

    const logoutResult = async () =>{
        await logout(cookieValue)
        .then(val =>{
            verifyLogout(val)
        })
        .catch(e =>{
            console.error(e);
        })
    }

    return (
        <nav className="nav-bar">
                <h1 className="title-nav">TASKAPP</h1>
            <div className="links">
                <ul className="list-items">
                    <li><Link to={!cookieValue ? '/login' : '/'}>Home</Link></li>
                    <li><Link to="/">Creator</Link></li>
                    <li>
                        {
                            !cookieValue 
                            ? <span></span>
                            : <Link to="/login" onClick={logoutResult} id="btn-logout">Logout</Link> 
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}
