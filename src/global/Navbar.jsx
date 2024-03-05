import { Badge } from "@mui/material";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Rasm from "/images/image-product-1.jpg";
import cartSlice from "../store/cartSlice";

const Navbar = () => {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch()
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const hisob = useSelector((state) => state.hisob);
  return (
    <div className="navbar">
      <ul className="navbar_3">
        <li className="navbar_4">sneakers</li>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="navbar_5">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Badge
                badgeContent={hisob}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#ff7e1b",
                  },
                }}
              >
                <IoCartOutline className="navbar_icon" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px", ml: "170px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <div className="navbar_cart">
              <div className="navbar_cart1">Cart</div>
              <br />
              <hr />
              {!hisob ? (
                <div className="navbar_cart2">Your cart is empty.</div>
              ) : (
                <div className="navbar_cart3">
                  <div className="navbar_cart4">
                    <img src={Rasm} alt="" />
                    <div>
                      <div>Fall Limited Edition Sneakers</div>
                      $125.00 x {hisob} = <span>${hisob * 125}</span>
                    </div>
                  </div>
                  <button className="button" onClick={()=>dispatch(cartSlice.actions.reset())}>Checout</button>
                </div>
              )}
            </div>
          </Menu>
        </Box>

        <img src="/images/image-avatar.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
