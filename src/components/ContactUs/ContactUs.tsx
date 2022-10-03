import React from 'react';
import {  TextField, Button,  Typography, Box } from '@mui/material';
import theme from '../../theme';

const  contactUs = {
  padding: '44px 20px',
  textAlign: 'left',

  
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    padding: '200px 20px 190px',
   
  },
}
const wrapper =  {
  [theme.breakpoints.up('lg')]: {
    maxWidth: '2240px',
    display: 'flex',
    alignItems: 'center',
    gap: '310px',
 

  },
}
const form = {
  maxWidth: '713px',
  [theme.breakpoints.up('sm')]: {
    margin: 'auto',
    
  },
}
const itemBlockInfo = {
   
    background: '#F1F2F3',
    borderRadius: '5px'
}


const input = ({
  display: 'flex',
  gap: '25px',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding:'10px'
   
   
  },
})

const textField = {
  width: '300px',
  background:'#F1F2F3',
  borderRadius: '5px',
  '& input::placeholder': {
    fontSize: '20px',
    lineHeight: '20px',
    
  },
}

const paddings = {
  padding:'10px'
}
const buttons = {
  width: '174px',
  height: '40px',
  
  
  background: '#000000',
  borderRadius: '5px',

  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',



  color: '#FFFFFF',
}
const h = {

  width: '386px',
  height: '99px',
  fontFamily: 'Noto Sans',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '24px',
  lineHeight: '33px',

  color: '#000000'
}

function ContactUs() {


  return (
      <Box sx={contactUs}>
      <Box sx={wrapper}>
            <Box sx={form}>
        

              <Box sx={paddings} >
              <TextField sx={itemBlockInfo} type="email" placeholder="Enter email"  variant="outlined" fullWidth required />
              </Box>

              <Box sx={input}>
              <TextField sx={textField}  placeholder="Enter first name"  variant="outlined" fullWidth required /> 
              <TextField sx={textField}  placeholder="Enter last name"  variant="outlined" fullWidth required />
              </Box>

              <Box sx={paddings}>
              <TextField 
              sx={{ background:'#F1F2F3',
                    borderRadius: '5px',}} multiline rows={8} placeholder="Votre question"  fullWidth required />
              </Box>

              <Box sx={paddings}>
              <Button sx={buttons} type="submit" variant="contained" >Submit</Button>
              </Box>

            </Box>
              
      

          <Box >

            <Typography variant='h2' >Send Us a message</Typography>

            <Typography sx={h}>
             We will try our best to guide you and respond to your message within 24 hours !
            </Typography>

           </Box>
         
        </Box>

      </Box>
   
  );
}

export default ContactUs;