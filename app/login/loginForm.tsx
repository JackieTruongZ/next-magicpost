import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { useState, useRef } from 'react';
import Link from 'next/link';
import './style.css'
import { BaseService } from '../service/BaseService';
import { Toast } from 'primereact/toast';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef<Toast | null>(null);
  const baseService = new BaseService();

  const handleLogin = async () => {
    const formLogin = {
      email: username,
      password: password
    }
    try {
      const login = await baseService.login(formLogin);
      if (login.data.status === 'OK') {
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Login Success'});
        window.localStorage.setItem('access_token', login.data.data.access_token)
        const userInfor = await baseService.getUser();
        window.localStorage.setItem('username', userInfor.data.data.user.username)
        console.log(userInfor);
        setTimeout(()=>{window.location.href = '/dashboard'},1000);
      } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: `${login.data.message}` });
      }
    } catch (error) {
      console.log(error);
      toast.current?.show({ severity: 'error', summary: 'Error', detail: `Error when Login !` });
    }
  };

  return (
    <div className="login-form">
      <Toast ref={toast} />
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