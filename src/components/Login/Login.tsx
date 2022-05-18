import React, {useState} from 'react';
import './Login.css';
import Address from '../Address';
import Username from '../Username';

const Login = () => {
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');

    const onAddressSubmit = (address: string) => {
      console.log("address: ", address);
      setAddress(address);
    }

    const onUsernameSubmit = (username: string) => {
      console.log("username: ", username);
      setUsername(username);
    }
  return (
    <> {(!address || !username) &&
      <div className='login blue-glassmorphism'>
          <h3 className="header-login">Login</h3>
        <div className='card'>
            { (address === '') && <Address onAddressSubmit={onAddressSubmit} />}
            {address && !username && <Username onUsernameSubmit={onUsernameSubmit}/>}
        </div>
      </div>}
      </>
      )
}

export default Login