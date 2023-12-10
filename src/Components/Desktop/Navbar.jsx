import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { IconButton, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { addCartContext } from "./DesktopApp";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  const [cartCount] = useContext(addCartContext);
  const [navLogo, setNavLogo] = useState();
  const logo = async () => {
    try {
      const logo = await fetch("http://localhost:4000/auth");
      const jsonData = await logo.json();
      sessionStorage.setItem("autt", jsonData.token);
      setNavLogo(jsonData.logo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    logo();
  }, []);

  const navOptions = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Shop by Category",
      route: "categories",
    },
    {
      name: "About Us",
      route: "#",
    },
    {
      name: "Contact",
      route: "#",
    },
  ];

  return (
    <Paper elevation={8} className="navBar">
      <div className="navLogo">
        <img src={navLogo} alt="Kodai Flavors" className="logo" />
      </div>
      <div className="navOptions">
        {navOptions.map((option) => (
          <Link to={option.route} style={{ textDecoration: "none" }}>
            <motion.div
              className="navButtons"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {option.name}
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="navUserSection">
        <div className="searchField">
          <SearchIcon sx={{ fontSize: 35 }} />
          <TextField id="outlined-basic" label="Search" variant="standard" />
        </div>
        <IconButton aria-label="profile">
          <PersonOutlineIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartCount} color="secondary">
            <AddShoppingCartIcon sx={{ fontSize: 40 }} />
          </StyledBadge>
        </IconButton>
      </div>
    </Paper>
  );
}

export default Navbar;
