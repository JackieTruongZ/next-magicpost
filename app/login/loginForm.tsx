import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { useState } from 'react';
import Link from 'next/link';
import './style.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
  };

  return (
    <div className="login-form">
      <Card title="Login">
        <Panel>
          <div className="p-grid p-dir-col">
            <div className="p-col">
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="p-col">
              <label htmlFor="password">Password</label>
              <InputText
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="p-col">
              <Button label="Login" onClick={handleLogin} />
            </div>
            <div className="p-col">
              <div className="signup-link">
                <p>
                  <span>Don't have an account? </span>
                  <Link href="/signup" legacyBehavior>
                    <a className="signup-text">Sign up</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Panel>
      </Card>
    </div>
  );
};

export default LoginForm;