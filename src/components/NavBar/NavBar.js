import React from "react";
import NavItem from '../NavItem/NavItem'
import useStyles from "./NavBar.styles";

const NavBar = ({ label }) => {
  const classes = useStyles();

  return (
    <ul className={classes.navBarRoot}>
      <NavItem label="Home" />
      <NavItem label="Shop" />
      <NavItem label="Blog" />
    </ul>
  );
};

export default NavBar;
