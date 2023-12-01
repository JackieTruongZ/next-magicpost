import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { userTypeOptions } from '../../public/utils/Utils'
import Link from 'next/link';
import './style.css'

const CreateFrom = () => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = () => {
    
  };

  return (
    <div className="login-form">
      <Card title="Create Account">
        <Panel>
          <div className="p-grid p-dir-col custom-margin ">
            <label htmlFor="userType">User Type</label>
            <div className="p-col">
              <Dropdown
                id="userType"
                value={userType}
                options={userTypeOptions}
                onChange={(e) => setUserType(e.target.value)}
                placeholder="Select a type"
              />
            </div>
            <div className="p-col">
              <label htmlFor="username">Username</label>
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="p-col">
              <Button label="Login" onClick={handleLogin} />
            </div>
          </div>
        </Panel>
      </Card>
    </div>
  );
};

export default CreateFrom;