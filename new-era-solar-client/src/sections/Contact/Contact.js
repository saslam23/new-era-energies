import React, {useState} from 'react'
import './contact.css';
import emailjs from 'emailjs-com';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ContactSuccess = ({error, open, handleClose}) =>{
  return(
    <div>
          {error ?
           <Dialog
           open={open}
           TransitionComponent={Transition}
           keepMounted
           onClose={handleClose}
           aria-describedby="alert-dialog-slide-description"
         >
           <DialogTitle>We're Sorry :(</DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-slide-description">
             There was a problem processing your request. We're working on it :)
             </DialogContentText>
           </DialogContent>
           <DialogActions>
   
             <Button onClick={handleClose}>Close</Button>
           </DialogActions>
         </Dialog>:

          <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Thank you!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            We have received your message. Please give us 24-48 hours to get back to you.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
  
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        }
    </div>
  )
}

export  function Contact() {
  const [open, setOpen] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
const [toSend, setToSend] = useState({
  from_name:'',
  to_name:'New Era Energies',
  message:'',
  reply_to:''
})

const handleChange = (e) =>{
 setToSend({...toSend, [e.target.name]: e.target.value})
}

  const handleContactForm = (e) =>{
    e.preventDefault();
  emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID, 
    toSend, 
    process.env.REACT_APP_USER_ID
    ).then((response) =>{
      var status = response.status;
      console.log('SUCCESS!', response.status, response.text);
      if(status === 200){
        setOpen(true);
        setShowDialog(true);
      }
    }, (err) =>{
      if(err){
        setError(true);
        setOpen(true);
        setShowDialog(true);
      }
      console.log('FAILED...', err);
    })
  }

  return (
    <div   id="contact">
         <Typography className="section-title-blue" variant="h4" style={{color:'white', textAlign:'center', padding:'2rem 0 0 0', marginBottom:'4rem'}}>Contact Us</Typography>
         <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', }}>
           <div  className="contact-info" >
             <Typography  variant="h3" sx={{color:'white', maxWidth:'650px'}}>Have questions or need a quote?</Typography>
             <br></br>
             <Typography variant="h4" sx={{color:'white', maxWidth:'600px'}}> We'd love to hear from you.</Typography>
             <br></br>
           </div>
        <Box sx={{display:'flex', justifyContent:'center', paddingBottom:'2rem', }}>
            <Card className="contact-card" data-aos-duration="1000" data-aos="zoom-in"  raised="true" >
                <CardContent>
                <br/>
                <form onSubmit={handleContactForm}>
                <FormGroup >
                    <FormControl>
                    <InputLabel     htmlFor="name-input">Name</InputLabel>
                    <Input  value={toSend.from_name} onChange={handleChange} name="from_name" id="name-input" aria-describedby="name-helper-text"/>
                    </FormControl>
                    <br/>
                    <br/>
                    <FormControl>
                    <InputLabel htmlFor="my-input">Email Address</InputLabel>
                    <Input  value={toSend.reply_to} onChange={handleChange}  name="reply_to" id="my-input" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <br/>
                    <br/>
                    <TextField
                    name="message"
                    id="outlined-textarea"
                    label="Message"
                    multiline
                    rows={8}
                    variant="outlined"
                    value={toSend.message}
                    onChange={handleChange}
                    />
                    <br/>
                <Button type="submit" style={{backgroundColor:'#526aa8'}} variant="contained">Submit</Button>
                </FormGroup>
                </form>
                </CardContent>
            </Card>
        </Box>
        </div>
        {showDialog && <ContactSuccess error={error} open={open} handleClose={handleClose}/>}
    </div>
  )
}
