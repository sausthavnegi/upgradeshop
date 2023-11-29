import {React,useState} from "react";
import { styled, alpha } from '@mui/system';
import { SearchOutlined, ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const SearchBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  //marginLeft: 'auto', // Move the search bar to the right
  marginRight: theme.spacing(2), // Add some margin to separate from other elements
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}));


const Navbar = ({isLoggedIn, isAdmin, setIsLoggedIn}) => {

  
  const handleLogout = () =>{
    setIsLoggedIn(false)
    
  }

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <ShoppingCart />
          <Typography padding={2}>
            UpGrad E-Shop
          </Typography>
        </Box>

        <SearchBar>
       
        <SearchOutlined />
        
 
        </SearchBar>

        <Box display="flex" >
          {
            console.log("logged in " ,isLoggedIn)
          
          }
          {
            console.log("Admin ", isAdmin)
          }
          { isLoggedIn ? (
            isAdmin?(
            <>
            <Typography padding={2} component={Link} to ="/add-product" color={"white"}>
            Add Product
          </Typography>
          <Typography padding={2}  color={"white"} onClick={handleLogout} component={Link} to ="/login" >
          Logout
        </Typography>
        </>
          ):(
          <>  
           <Typography padding={2}  color={"white"} onClick={handleLogout} component={Link} to ="/login">
          Logout
        </Typography>
          </>
         )
          ):( 
            <>
            <Typography padding={2} component={Link} to ="/login" color={"white"}>
            Login
          </Typography>
          <Typography padding={2} component={Link} to ="/signup" color={"white"}>
            SignUp
          </Typography>
          </>
          )}
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
