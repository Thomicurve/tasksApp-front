import Cookies from 'universal-cookie'
import { useEffect, useState } from 'react'
const cookies = new Cookies()

const UseCookie = () =>{

    const [userId, setUserId] = useState(cookies.get('idUser'))

    useEffect(()=>{
        setUserId(cookies.get('idUser'))
    }, [])

    const create = (value)=>{
        cookies.set('idUser', value, {path:"/"})
    }

    const clean = ()=>{
        cookies.remove('idUser')
    }

    return [
        userId,
        create,
        clean
    ]
}

export default UseCookie;
