'use client'

import React from 'react'
import "../../public/theme/theme.css";
import LoginForm from './loginForm';

const Login = () => {
    return (
        <div className="login-page">
          <h1>Login Page</h1>
          <LoginForm />
        </div>
      );
};

export default Login