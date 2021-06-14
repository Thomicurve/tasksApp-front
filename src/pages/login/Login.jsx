import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import UseCookie from '../../hooks/useCookie'


import { login } from '../../services/authServices'
import './styles.scss'

export default function Login() {
    const history = useHistory();

    const [cookieValue, createCookie] = UseCookie();

    const verifyLogin = ({message, auth, token}) => {
        if(message !== 'login success' || auth === false)
            return console.error(message)
            
        
        if(auth === true)
            createCookie(token);
            history.push('/')
            window.location.reload();
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required(),
            password: Yup.string().required()
        }),
        onSubmit: async ({email, password}) => {
            const result = await login(email, password, cookieValue);
            verifyLogin(result)
        }
    })

    return (
        <div className="login-container">

            <div className="form-container">
                <h2>LOGIN</h2>
                <Form method="post" onSubmit={formik.handleSubmit} >
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            onChange={formik.handleChange}
                            name="email"
                            id="email"
                        />
                        <p className="error-message">{formik.errors.email}</p>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            onChange={formik.handleChange}
                            name="password"
                            id="password"
                        />
                        <p className="error-message">{formik.errors.password}</p>
                    </div>
                    <input type="submit" value="SUBMIT" />
                </Form>
                <p>Don't have an account yet? <Link to="/register">Click Here.</Link></p>
            </div>
        </div>
    )
}


// onSubmit={(e) => handleSubmitLogin(e)}