import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import UseCookie from '../../hooks/useCookie'

export default function Home() {
    const history = useHistory();
    const [cookieValue] = UseCookie();

    useEffect(()=>{
        if(!cookieValue)
            return history.push('/login')

    }, [history, cookieValue])

    return (
        <div className="home-container">
            <h3>Pagina home</h3>
        </div>
    )
}
