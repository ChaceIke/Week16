import React from 'react';
import LoginForm from '../Components/Login/login-form';

// This is the loginPage functional component.
export default function LoginPage() {
    return (
        <div className='home container'>
            <div className='row'>
                <h2>Welcome</h2>
                <LoginForm />
            </div>
        </div>
    );
}