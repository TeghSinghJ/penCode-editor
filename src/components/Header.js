import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import logo from '../assets/logo1.png'
import styled from '@emotion/styled'

const Header = () => {
    const Container = styled(AppBar)`
    background: #181818;
    height : 10vh;
    `;
    
    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt='logo' style={{ width: "50px" }} />
                <h1>PenCode Editor</h1>
                

            </Toolbar>
        </Container>
    )
}

export default Header
