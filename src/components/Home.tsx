import { Button, TextField, useStepContext } from '@mui/material';
import React, { useState } from 'react';
import Address from './Address';
// import UserName from './UserName';

interface Props {
    handleAddressSubmit: (ip: string, port: string) => void;
    handleUsernameSubmit: (uName: string) => void;
}


const Home: React.FC<Props> = (props) => {
    const {handleAddressSubmit, handleUsernameSubmit} = props;
    return (
    <>
        {/* <Address handleAddressSubmit={handleAddressSubmit} /> */}
        {/* <UserName onNameSubmit={handleUsernameSubmit}/> */}
    </>
    )
}

export default Home;