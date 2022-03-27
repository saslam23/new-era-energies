import React from 'react'
import "./solar-process.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import secondSection from '../../data/second-section-data';
import SolarProcessCard from '../../components/SolarProcessCard';


export default function SolarProcess() {
  return (
    <div id="solarProcess" className="solar-background">
        <Typography style={{padding:'2rem 0 0 0', marginBottom:'3rem'}} variant="h4" className="section-title">Solar Process</Typography>

        {secondSection.map((item, index) =>{
            return(
                <>
               <div style={{margin:'0 .5rem'}}>
                <SolarProcessCard
                id={item.id}
                image={item.image}
                title={item.title}
                excerpt={item.excerpt}
                step={item.step}
                />
                </div>
                </>
            )
        }
          
            )}

        </div>
  )
}
