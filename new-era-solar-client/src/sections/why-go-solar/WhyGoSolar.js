import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {RiRecycleFill} from 'react-icons/ri';
import{MdOutlineDoubleArrow} from 'react-icons/md';
import {BiDollar} from 'react-icons/bi';
import './why-go-solar.css';
import firstSection from '../../data/first-section-data';
import SectionCard from '../../components/SectionCard';
/* #F5EED3 beige color */

const firstSectionCard = (item, index) =>{
  const icons =[
    <RiRecycleFill color="#ffffff" size="2.5rem"/>,
    <MdOutlineDoubleArrow style={{transform:'rotate(270deg)'}} color="#ffffff" size="2.5rem"/>,
    <BiDollar color="#ffffff" size="2.5rem"/>

  ]

  const Icon = icons[index]
  return(
    <SectionCard
    id={item.id}
    title={item.title}
    icon={Icon}
    excerpt={item.excerpt}
    duration={item.duration}
    />
  )
}


export default function WhyGoSolar() {
  return (
    <div id="whyGoSolar" className="why-go-solar">
     <Typography className="section-title" variant="h4" style={{textAlign:'center', margin:'2rem 0 3rem 0'}}>Why Go Solar?</Typography>
     <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'space-evenly', margin:'0 .5rem 1rem .5rem'}} >
     {
       firstSection.map(firstSectionCard)
     }
    </Box>
    </div>
  )

  
}
