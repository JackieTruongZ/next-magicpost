'use client'

import React from 'react'
import "../../public/theme/theme.css";
import CreateFrom from './createForm';

const Login = () => {
    return (
        <div className="login-page">
          <h1>Create Account</h1>
          <CreateFrom />
        </div>
      );
};

export default Login
