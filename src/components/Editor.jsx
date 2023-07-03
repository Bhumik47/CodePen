import { Box, styled } from "@mui/material";
import { useState } from "react";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import '../App.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 700;
`;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;

  @media (max-width: 600px){
    min-width:95%;
  }
`;




const Editor = ({ heading, icon, color, onchange, value, language }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onchange(value);
  };

  const toggleFullscreen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Container style={open ? null : { flexGrow: 0, maxWidth:100 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: '#000',
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        {open ? (
          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: "center", cursor:"pointer"}}
            onClick={toggleFullscreen}
          />
        ) : (
          <OpenInFullIcon
            fontSize="small"
            style={{ alignSelf: "center", cursor:"pointer"}}
            onClick={toggleFullscreen}
          />
        )}
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='controlled-editor'
        options={{
          theme: 'material',
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          mode: language,
        }}
      />
    </Container>
  );
};

export default Editor;
