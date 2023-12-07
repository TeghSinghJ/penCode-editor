import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Editor from './Editor'
import styled from '@emotion/styled'
import DataProvider, { DataContext } from '../context/DataProvider';
const Container = styled(Box)`
    display:flex;    
    background-color:#181818;
    height: 62vh;
`;
const CodeEditor = () => {
    const { html, setHtml, js, css, setCss, setJs } = useContext(DataContext);
    return (
        <Container>
            <Editor heading="HTML" icon='/' color='#CF1020' value={html} onChange={setHtml}/>
            <Editor heading="CSS" icon='*' color='#4B9CD3' value={css} onChange={setCss}/>
            <Editor heading="JavaScript" icon='{}' color='#EEE600' value={js} onChange={setJs}/>
        </Container>
    )
}

export default CodeEditor
