import React from 'react';
import { useState } from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Main() {
    const [loginEmail, setLoginEmail] = React.useState('');
    const [loginPassword, setLoginPassword] = React.useState('');

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            ).then(() => {
                window.location.href = '/homelogin'; //nadaainda
            })
        } catch (error) {
            document.querySelector('.loginError').innerHTML = 'Email or Password is incorrect';
            }
        }

    return (
        <main className='mainLogin'>
            <fieldset className='fidelSet'>
                <form className='formLogin'>
                    <label className='labelLogin' htmlFor="email">Email</label>
                    <input onChange={(event) => {setLoginEmail(event.target.value)}} className='inputLogin' type="email" id="email" name="email" />
                    <label className='labelLogin' htmlFor="password">Password</label>
                    <input onChange={(event) => {setLoginPassword(event.target.value)}} className='inputLogin' type="password" id="password" name="password" />
                </form>
                <Link className='buttonLogin' type="submit" onClick={login}>Login</Link>
                <p className='pLogin'>Don't have an account? <Link className='linkLogin' to='/register'>Register</Link></p>
                <span className='loginError'></span>
            </fieldset>
        </main>
    );
    }