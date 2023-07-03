import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from '../context/DataProvider';
import { useContext } from "react";
import CodePersistence from "../context/Persistance";


const Container = styled(Box)`
  display: flex;
  background: #060606;
  overflow-x: auto; 
}
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);


  return (
    <Container>
        <CodePersistence/>
      <Editor
        heading='HTML'
        icon='/'
        color='#FF3C41'
        value={html}
        onchange={setHtml}
        language="xml"
      />
      <Editor
        heading='CSS'
        icon='*'
        color='#0EBEFF'
        value={css}
        onchange={setCss}
        language="css"
      />
      <Editor
        heading='JS'
        icon='()'
        color='#FCD000'
        value={js}
        onchange={setJs}
        language="javascript"
      />
    </Container>
  );
}

export default Code;
