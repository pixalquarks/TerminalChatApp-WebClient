import React, { useContext } from "react";
import "./Error.css";
import { GRPCContext } from "../../context/GRPCContext";
import { GRPCContextType } from "../../react-app-env";

const Error = () => {
  const { Retry, Relogin } = useContext(GRPCContext) as GRPCContextType;

  const onRetry = async () => {
    console.log("Retry Clicked");
    await Retry();
  };

  return (
    <>
      <div id="error-box">
        <div className="message">
          <h1 className="alert f-xl">Error!</h1>
          <p>Disconnected from the server!!!</p>
        </div>
        <button className="button-box first" onClick={onRetry}>
          <h1 className="red">Retry</h1>
        </button>
        <button className="button-box" onClick={Relogin}>
          <h1 className="red">Login</h1>
        </button>
      </div>
    </>
  );
};

export default Error;
