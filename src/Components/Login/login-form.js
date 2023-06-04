import React from 'react';

// This is the login Form for the website.
// Not currently set up to work as a real log in page yet.
export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="card rounded-0 colorclass text-light border-dark login-form" id="login-form">
                <div className="card card-header">
                    Welcome User!
                </div>
                <div className="card-body">
                    <div className='form-group'>
                        <label htmlFor="username">Username:</label>
                        <input className='form-control' id="username" placeholder='Username (i.e. FlyinPanda68)'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input className='form-control' id="password" placeholder='Password'></input>
                    </div>
                </div>
                <div className='card-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </div>
        )
    }
}