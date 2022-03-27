import React from 'react'
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function SectionCard({id, title, icon, excerpt, duration}) {
  return (
    <>
     <div key={id}  data-aos="zoom-in" data-aos-duration={duration}>
     <Card raised="true" sx={{backgroundColor:'#365194', minWidth: 275, maxWidth:300, height:320, marginBottom:'1rem' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {icon}
        </Typography>
        <Typography style={{marginTop:'.5rem', color:'#ffffff'}} variant="h5">{title}</Typography>
        <Typography style={{marginTop:'1.5rem', color:'#ffffff', fontSize:'18px'}} sx={{ mb: 1.5 }} color="text.secondary">
         {excerpt}
        </Typography>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
