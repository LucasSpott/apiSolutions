import React from "react";
import './CSS/Register.css';
import { Link } from "react-router-dom";
import { auth } from '../firebase-Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Main() {
    const [registerEmail, setRegisterEmail] = React.useState('');
    const [registerPassword, setRegisterPassword] = React.useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = React.useState('');

    const register = async () => {
        if (registerPassword === registerConfirmPassword) {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerPassword,
                ).then(() => {
                    window.location.href = '/login'; //nadaainda
                })
            } catch (error) {
                document.querySelector('.registerError').innerHTML = 'Email or Password is incorrect';
            }
        }
    }
    return (
        <main className="mainRegister">
            <fieldset className="fidelsetRegister">
                <form className="formRegister">
                    <label className="labelRegister" htmlFor="email">Nome da empresa</label>
                    <input className="inputRegister" type="text" id="name" name="name" />
                    <label className="labelRegister" htmlFor="email">Email</label>
                    <input className="inputRegister" onChange={(event) => {setRegisterEmail(event.target.value)}} type="email" id="email" name="email" />
                    <label className="labelRegister" htmlFor="password">Senha</label>
                    <input className="inputRegister" onChange={(event) => {setRegisterPassword(event.target.value)}} type="password" id="password" name="password" />
                    <label className="labelRegister" htmlFor="password">Confirmar Senha</label>
                    <input onChange={(event) => {setRegisterConfirmPassword(event.target.value)}} className="inputRegister" type="password" id="password" name="password" />
                </form>
                <Link className="buttonRegister" type="submit" onClick={register}>Register</Link>
                <span className="registerError"></span>
                <span className="registerError2"></span>
            </fieldset>    
        </main>
    );
    }