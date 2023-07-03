import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
  border-buttom: 1px solid #2f2f2f;
`;

const Header = () => {
  return (
    <Container style={{position:'relative', borderBottom:'0.1px solid gray'}}>
      <Toolbar>
        <h1 style={{position:'absolute', top:-17}}>CodePen</h1>
      </Toolbar>
    </Container>
  );
};

export default Header;
