import React, {useState, useContext} from 'react';
import './Login.css';
import Address from '../Address';
import Username from '../Username';
import Error from '../Error';
import { GRPCContext } from '../../context/GRPCContext';
import { GRPCContextType } from '../../react-app-env';

const Login = () => {

  const {address, username} = useContext(GRPCContext) as GRPCContextType;
  const [error, setError] = useState(true);

  return (
    <>
    <div className="login blue-glassmorphism">
    {error && <Error />}
    {
      !error &&
      (address=="" || username == "") &&
      <div className=''>
          <h3 className="header-login">Login</h3>
        <div className='card'>
            { (address == "") && <Address />}
            { !(address == "") && (username == "") && <Username/>}
        </div>
      </div>}
      </div>
      </>
      )
}

export default Login