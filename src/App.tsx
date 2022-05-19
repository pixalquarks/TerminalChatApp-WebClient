import React from "react";
import './App.css';

import { Header, Chat, UserList, Footer, Login } from "./components";
import { GRPCContext } from "./context/GRPCContext";


const App = () => {
  return (
    <>
    <div className="main">
    <Header />
    <div className="sideBySide">
    <UserList />
    <Chat />
    </div>
    <Footer />
    <Login />
    </div>
    </>
  );
}

export default App;