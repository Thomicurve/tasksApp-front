import axios from 'axios'

// CHANGE THIS ON DEPLOY
const link = 'http://localhost:4000';

const login = async (email, password, token = '')=>{
    if(!email || !password)
        return {auth: false};

    const data = {
        email: email,
        password: password
    }
    
    const result = await axios(`${link}/login`,{
        method: 'POST',
        headers: {
            'x-access-token': token
        },
        data: data,
    })

    return result.data
}


const logout = async (token = '') =>{

    const result = await axios(`${link}/logout`, {
        method: 'GET',
        headers: {
            'x-access-token': token
        }
    })

    return result.data;
}   


export {login, logout};