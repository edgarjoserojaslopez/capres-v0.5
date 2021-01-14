import React from "react";

import useStyles from './NavItem.styles'

const NavItem = ({ label }) => {
const classes= useStyles()

  return <li className={classes.navItemRoot}>{label}</li>;
};

export default NavItem;
