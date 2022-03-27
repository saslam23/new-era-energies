import React, {useEffect} from 'react'
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import {Link} from 'react-scroll';
import DrawerLeft from './DrawerLeft';

const pages = [

  {
    pageTitle:'Why Solar',
    toLink:'whyGoSolar',
    offset:-120
  },
  {
    pageTitle:'Process',
    toLink:'solarProcess',
    offset:-90
  },
  {
    pageTitle:'About',
    toLink:'about-us',
    offset:-90
  },

  {
    pageTitle:'Contact',
    toLink:'contact',
    offset:-90
  },
  {
    pageTitle:'Faq',
    toLink:'faq',
    offset:0
  }
]


const Navbar = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);



  const openCloseMenu =() =>{
    setMenuToggle(false);
  }



  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
 /*    window.addEventListener('scroll', () =>{
      if(window.scrollY === 0){
        setScroll(false);
      }
      else{setScroll(true)};

    }) */
    return () => {
      
    }
  }, [])


  return (
    <AppBar  className="nav-style" position="fixed">
      <Container >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
         
          </Typography>

          <Box style={{display:'flex', alignItems:'center'}} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              className="responsive" 
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setMenuToggle(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
           
            <DrawerLeft menuToggle={menuToggle} openCloseMenu={openCloseMenu}/>
          </Box>
          <img
          className="res-logo"
          src="/assets/new-era-logo.png"
          style={{margin:'auto'}}
          alt="logo"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          />
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <div key={page.pageTitle} className="nav-item">
              <Link style={{cursor:'pointer'}} offset={page.offset} hashSpy={true} smooth={true} spy={true}  activeClass="item-active"  to={page.toLink} key={page.pageTitle}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', textDecoration:'none'}}
              >
                {page.pageTitle}
              </Link>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;