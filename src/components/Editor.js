import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2/index";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import '../App.css'

const HeaderBoxLeft = styled(Box)`
    background : #404040;
    display:flex;
    padding: 10px 12px;
`;
const HeaderBox=styled(Box)`
    background:#181818;
    display:flex;
    justify-content:space-between;
    color:white;
    font-weight:700;

`;
const Container = styled(Box)`
    flex-grow:1;
    flex-basic:0;
    display:flex;
    flex-direction:column;
    padding: 0px 8px 8px;
`;
const Editor = ({heading,icon,color,value,onChange}) => {
    const [opened,setOpened] = useState(true);
    const handleChange=(editor,data,value)=>{
        onChange(value);
    }
  return (
    <Container style={opened?null : {flexGrow:0}}>
        <HeaderBox>
            <HeaderBoxLeft>
                <Box component='span' style={{
                    width:20 ,
                    backgroundColor:color,
                    height : 20,
                    display : 'flex',
                    placeContent:'center',
                    borderRadius:5,
                    marginRight:5,
                    paddingBottom : 2,
                   color:'#000'
                }}>{icon}</Box>{heading} 
                
            </HeaderBoxLeft>
            <CloseFullscreenIcon 
            fontSize='small'
            style={{alignSelf:'center'}}
            onClick={()=>setOpened(prevState=>!prevState)}/>
        </HeaderBox>
        <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        options={{
            theme:"material",
            mode:'xml',
            lineNumbers:true
        
        }}
        />
    </Container>
  )
}

export default Editor
