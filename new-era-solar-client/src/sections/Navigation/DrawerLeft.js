import React from 'react'
import Drawer from '@mui/material/Drawer';
import {Link} from 'react-scroll';

export default function DrawerLeft({menuToggle,openCloseMenu}) {
    const pages = [
        {
          pageTitle:'Why Solar',
          toLink:'whyGoSolar'
        },
        {
          pageTitle:'Process',
          toLink:'solarProcess'
        },
        {
          pageTitle:'About',
          toLink:'about-us'
        },
      
        {
          pageTitle:'Contact',
          toLink:'contact-container'
        },
        {
          pageTitle:'Faq',
          toLink:'faq'
        }
      ]
  return (
    <div>
    {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
       
        <Drawer
          anchor={anchor}
          open={menuToggle}
          onClose={() => openCloseMenu()}
        >
             {pages.map((page) => (
              <Link activeClass="item-active" style={{cursor:'pointer'}} offset={-120} hashSpy={true} smooth={true}  to={page.toLink} key={page.pageTitle}
            /*   onClick={handleCloseNavMenu} */
              sx={{ my: 2, color: 'white', display: 'block', textDecoration:'none'}}
              className="nav-item-drawer drawer-items">
                {page.pageTitle}
              </Link>
            ))}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  )
}
