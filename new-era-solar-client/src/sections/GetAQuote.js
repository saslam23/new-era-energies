import React,{useState} from 'react'
import './get-a-quote.css';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {ContactSuccess} from '../sections/Contact/Contact';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function GetAQuote() {
  const [open, setOpen] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
const [toSend, setToSend] = useState({
  bill_cost:'',
  from_name:'',
  to_name:'Radiant Energy',
  street_address:'',
  city:'',
  state:'',
  zip:'',
  phone:'',
  contact:'',
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
    <div
    id="get-a-quote-section"
    >
        <div style={{position:'absolute', top:'35%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography className="get-started" color="white" variant="h3">Let us help you get started</Typography>
            <br></br>
            <br></br>
            <div data-aos="zoom-out-up" data-aos-duration="1000" style={{textAlign:'center'}}>
              
              <button
              onClick={handleClickOpen}
            className="quote-button"
            >Get a Quote</button>
             <Dialog
           open={open}
           TransitionComponent={Transition}
           keepMounted
           onClose={handleClose}
           aria-describedby="alert-dialog-slide-description"
         >
           <DialogTitle sx={{color:'#2f457e'}} variant="h4">Get a Quote</DialogTitle>
           <DialogContent>
           <form onSubmit={handleContactForm}>
                <FormGroup >
                <Typography variant="h6">How much is your typical electricity bill?</Typography>
                    <FormControl  variant="outlined">
                   <OutlinedInput required="true"  startAdornment={<InputAdornment position="start">$</InputAdornment>} style={{width:'75px'}} value={toSend.bill_cost} onChange={handleChange} name="bill_cost" id="bill-input" aria-describedby="name-helper-text"/>
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl>
                    <InputLabel     htmlFor="name-input">Name</InputLabel>
                    <Input required="true" value={toSend.from_name} onChange={handleChange} name="from_name" id="name-input" aria-describedby="name-helper-text"/>
                    </FormControl>
                    <br/>
                    <br/>
                    <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
                    <FormControl style={{marginTop:'15px'}}>
                    <InputLabel     htmlFor="street-input">Street Address</InputLabel>
                    <Input required="true" value={toSend.street_address} onChange={handleChange} name="street_address" id="street-input" aria-describedby="name-helper-text"/>
                    </FormControl>
                    <FormControl style={{marginTop:'15px'}}>
                    <InputLabel  htmlFor="city-input">City</InputLabel>
                    <Input required="true" value={toSend.city} onChange={handleChange} name="city" id="city-input" aria-describedby="city-helper-text"/>
                    </FormControl>
                    <FormControl style={{marginTop:'15px'}}>
                    <InputLabel     htmlFor="state-input">State</InputLabel>
                    <Input required="true" value={toSend.state} onChange={handleChange} name="state" id="state-input" aria-describedby="state-helper-text"/>
                    </FormControl>
                    <FormControl style={{marginTop:'15px'}}>
                    <InputLabel     htmlFor="zip-input">Zip Code</InputLabel>
                    <Input required="true" value={toSend.zip} onChange={handleChange} name="zip" id="zip-input" aria-describedby="zip-helper-text"/>
                    </FormControl>
                    </div>
                    <FormControl style={{marginTop:'25px'}}>
                    <InputLabel htmlFor="my-input">Email Address</InputLabel>
                    <Input required="true" value={toSend.reply_to} onChange={handleChange}  name="reply_to" id="my-input" aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl style={{marginTop:'25px'}}>
                    <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
                    <Input required="true" value={toSend.phone} onChange={handleChange}  name="phone" id="phone-input" aria-describedby="phone-helper-text"/>
                    </FormControl>
                    <FormControl style={{marginTop:'25px'}}>
                    <InputLabel htmlFor="contact-input">How should we contact you? (call, text, or email)</InputLabel>
                    <Input type="text"required="true" value={toSend.contact} onChange={handleChange}  name="contact" id="contact-input" aria-describedby="contact-helper-text"/>
                    </FormControl>                 
                    <br/>
                    <br/>
                    <TextField
                    name="message"
                    id="outlined-textarea"
                    label="Other comments"
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
           </DialogContent>
           <DialogActions>
   
             <Button onClick={handleClose}>Close</Button>
           </DialogActions>
         </Dialog>
            </div>
        </div>
        {showDialog && <ContactSuccess error={error} open={open} handleClose={handleClose}/>}
    </div>
  )
}
