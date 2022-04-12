import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PrivacyPolicy from './PrivacyPolicy';
// import {Helmet} from "react-helmet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Footer() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="footer">
      <br></br>
      Copyright &copy; {(new Date().getFullYear())} New Era Energies
    <div>
    <p onClick={handleClickOpen} style={{color:"white", cursor:'pointer'}}>Privacy Policy</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <PrivacyPolicy/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
{/* 
    <Helmet>
                <script src="/assets/custom.js" type="text/javascript" />
              </Helmet> */}
    </div>
  )
}

