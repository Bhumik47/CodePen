import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: 100vh;
  display:flex;
  flex-grow:1 !important;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const srcCode = `
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`;

    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: "#444857" }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
