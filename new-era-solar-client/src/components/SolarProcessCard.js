import React from 'react'
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


export default function SolarProcessCard({id, image, title, excerpt, step}) {
  return (
    <div>
           {id % 2 === 0 ?
           <>
           <Box key={id} sx={{display:'flex', justifyContent:'space-around', paddingBottom:'5rem'}}>
         <div>
             <p style={{color:'#365194', fontSize:'20px'}}>Step {step} </p><hr></hr>     
        <Card raised="true" data-aos="fade-right" sx={{ maxWidth: 800, minHeight:450 }}>
        
        <CardMedia
          component="img"
          height="200"
          image={image}
          loading="lazy"
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography style={{lineHeight:'2rem'}}  variant="body2" color="text.secondary">
              {excerpt}
          </Typography>
        </CardContent>
        </Card>
        </div> 
     <div></div> 
     </Box>
    </> :
    <>
    <Box key={id} sx={{display:'flex', justifyContent:'space-around', paddingBottom:'5rem'}}>
    <div></div>
    <div>
    <p style={{color:'#365194', fontSize:'20px'}}>Step {step} </p><hr></hr>     
        <Card raised="true" data-aos="fade-left" sx={{ maxWidth: 800, minHeight:450 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography style={{lineHeight:'2rem'}}  variant="body2" color="text.secondary">
            {excerpt}
          </Typography>
        </CardContent>
    </Card>
    </div>
    </Box>
    </>
    }
    </div>
  )
}

/* parent component will map data.  once data enters this file, we will check to see if the id is divisible by 2
if it is, the data will interpolate in the left else => right
*/