import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider';

const Output = () => {
    const [src,setSrc] = useState('');
    const {html,css,js} = useContext(DataContext);
    const sourceCode = `
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>${html}</body>
    <script>${js}</script>
    </html>
    `;
    useEffect(()=>{
        const timeOut = setTimeout(() => {
            setSrc(sourceCode)
        }, 1500);
        return ()=>clearTimeout(timeOut);
    },[html,css,js])
  return (

    <Box>
        <iframe
        srcDoc={src}
        width="100%"
        height="100%"
        title='Output'
        sandbox='allow-scripts'
        ></iframe>
    </Box>
  )
}

export default Output
