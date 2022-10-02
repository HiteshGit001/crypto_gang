import React, { useEffect } from 'react'
import { AppBar, Toolbar, Select, MenuItem, Typography } from "@mui/material";
import { Container } from '@mui/system';
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom"
import { useData } from '../../dataContext/Context';

const Header = () => {
  const { currency, setCurrency } = useData();

  const navigate = useNavigate();
  return (
    <div>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <p onClick={() => navigate("/")} className={styles.header_title}>
              Crypto Gang
            </p>
            <Select onChange={(event)=>setCurrency(event.target.value)} defaultValue={currency} variant="outlined" style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}>
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="inr">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header