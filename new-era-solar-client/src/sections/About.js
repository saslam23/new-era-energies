import React from 'react'
import './about.css';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <div id="about-us">
        <Typography style={{padding:'2rem 0 0 0', marginBottom:'2rem'}} variant="h4" className="section-title">About New Era</Typography>
        <div style={{display:'flex', justifyContent:'center'}}>
        <p style={{maxWidth:'800px', textAlign:'center', lineHeight:'2rem', paddingBottom:'2rem', fontSize:'18px'}}>
            At New Era Energies it is our job to make sure that the process of going solar is smooth. 
            We will help and guide you throughout the whole process until your solar is installed and 
            make sure the transition is as smooth as possible.  Our team prides ourselves on customer satisfaction 
            and making sure you leave content with the service and product that you are receiving.
        </p>
        </div>
        </div>
  )
}
