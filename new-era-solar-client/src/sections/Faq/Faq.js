import * as React from 'react'
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from '../../data/faq-data';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function Faq() {
    
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  return (
      <>
    <div style={{paddingBottom:'2rem', paddingLeft:'5px', paddingRight:'5px'}} id="faq">
    <Typography className="section-title" variant="h4" style={{textAlign:'center', margin:'2rem 0 3rem 0'}}>FAQ</Typography>
      {faqData.map((faq) =>{
        return(
          <>
          <div key={faq.id} style={{margin:'auto', maxWidth:'1000px', textAlign:'center', marginBottom:'1rem'}}>
          <Accordion sx={{marginBottom:'5px'}} expanded={expanded === faq.panel} onChange={handleChange(faq.panel)}>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{  fontWeight:'500' }}>
          {faq.question}
          </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{display:'flex', flexDirection:'row'}}>
          <WbSunnyIcon style={{paddingRight:'5px'}} />
          <Typography sx={{textAlign:'justify'}}>
          {faq.answer}
          </Typography>
          </AccordionDetails>
          </Accordion>
          </div>
          </>
        )
      })}
     
    </div>
      </>
  )
}
