import React, { useState, useContext } from "react";
import "./Login.css";
import Address from "../Address";
import Username from "../Username";
import Error from "../Error";
import { GRPCContext } from "../../context/GRPCContext";
import { GRPCContextType } from "../../react-app-env";

const Login = () => {
  const { address, username, err } = useContext(GRPCContext) as GRPCContextType;

  return (
    <>
      {(err || address === "" || username === "") && (
        <div className="login blue-glassmorphism">
          {err && <Error />}
          {!err && (address === "" || username === "") && (
            <div className="">
              <h3 className="header-login">Login</h3>
              <div className="card">
                {address === "" && <Address />}
                {!(address === "") && username === "" && <Username />}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
