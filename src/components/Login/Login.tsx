import React, {useState, useContext} from 'react';
import './Login.css';
import Address from '../Address';
import Username from '../Username';
import { GRPCContext } from '../../context/GRPCContext';
import { GRPCContextType } from '../../react-app-env';

const Login = () => {
    const [address, setAddress] = useState(true);
    const [username, setUsername] = useState(true);

    const {onAddressEnter, onUsernameEnter} = useContext(GRPCContext) as GRPCContextType;

    const onAddressSubmit = (address: string) => {
      console.log("address: ", address);
      if (address == "") return;
      onAddressEnter(address);
      setAddress(false);
    }

    const onUsernameSubmit = async (username: string) => {
      console.log("username: ", username);
      if (username == "") return;
      await onUsernameEnter(username);
      setUsername(false);
    }
  return (
    <> {(address || username) &&
      <div className='login blue-glassmorphism'>
          <h3 className="header-login">Login</h3>
        <div className='card'>
            { (address) && <Address onAddressSubmit={onAddressSubmit} />}
            { !address && username && <Username onUsernameSubmit={onUsernameSubmit}/>}
        </div>
      </div>}
      </>
      )
}

export default Login