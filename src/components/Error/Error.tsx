import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <>
  <div id="error-box">
    <div className="message"><h1 className="alert f-xl">Error!</h1><p>oh no, something went wrong.</p></div>
    <button className="button-box first"><h1 className="red">Retry</h1></button>
    <button className="button-box"><h1 className="red">Login</h1></button>
  </div>
    </>
  )
}

export default Error 
