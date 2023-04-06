import React from "react";
import { Toolbar, AppBar,  } from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: black;

 
`;

const Links = styled(NavLink)`
padding:10px;
text-decoration: none;
font-size:20px;
color: white;

`;
   
function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Links  to="/"> Crud </Links>
        <Links to="/all">All users</Links>
        <Links to="/add">Add users</Links>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </Header>
  );
}

export default Navbar;
