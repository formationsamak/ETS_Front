import React from 'react';
import {TextField, Button,  Typography, Box } from '@mui/material';
import theme from '../../theme';
import {useStyle} from "./style"


function ContactUs() {
    const style = useStyle(theme)

    return (
      <Box sx={style.contactUs}>
      <Box sx={style.wrapper}>
            <Box sx={style.form}>
              <Box sx={style.paddings} >
                <TextField sx={style.itemBlockInfo} type="email" placeholder="Enter email"  variant="outlined" fullWidth required />
              </Box>
              <Box sx={style.input}>
                  <TextField sx={style.textField}  placeholder="Enter first name"  variant="outlined" fullWidth required />
                  <TextField sx={style.textField}  placeholder="Enter last name"  variant="outlined" fullWidth required />
              </Box>
              <Box sx={style.paddings}>
                  <TextField
                  sx={{ background:'#F1F2F3',borderRadius: '5px',}} multiline rows={8} placeholder="Votre question"  fullWidth required />
              </Box>
              <Box sx={style.paddings}>
                <Button sx={style.buttons} type="submit" variant="contained" >Submit</Button>
              </Box>
            </Box>
          <Box>
            <Typography variant='h2' >Send Us a message</Typography>
            <Typography sx={style.h}>
             We will try our best to guide you and respond to your message within 24 hours !
            </Typography>
           </Box>
        </Box>
      </Box>
    );
}

export default ContactUs;