import { Fragment } from "react";
import SelectVariants from "./pages/select";
import './App.css';
import Logo from './img/Logo.png'
// import { Link, Route, Routes } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <Fragment>
      <header className="header">
        <div className="navbar">
          <img className="navbar__logo" src={Logo} alt="logo" />

          <TextField id="outlined-basic" label="Search bar" variant="outlined" className="navbar__search" />

          <SelectVariants />

          {/* <Link to={"/"} className="header__menu-link">Become a Mentor</Link> */}

          <Stack spacing={2} direction="row" className="buttons">
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Sing Up</Button>
          </Stack>

        </div>

      </header>
    </Fragment>
  );
}

export default App;
