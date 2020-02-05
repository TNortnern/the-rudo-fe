import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar color="default" position="static">
        <Toolbar className="navbar__container">
          <div className="navbar__logo">
            <Typography variant="h6">Wrestler Icon</Typography>
          </div>
          <div className="navbar__links">
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit">A Link</Button>
          </div>
          <MenuIcon className="navbar__hamburger" />
          <div className="navbar__ctas">
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
