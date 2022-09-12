import React from "react";
import {Box, Typography} from "@mui/material";
// @ts-ignore
import srcVideo from "../../asstes/fd847150-42ef-4388-8269-0f23783a5394_CTA_banner_background_wx2 (1) 1.png"

import Button from '@mui/material/Button';



function Business() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'stretch',
            position: "relative",
            overflow:'hidden',
            padding:'140px'


        }}>
         <img style={{position: "absolute", top: 0, zIndex: -1,   width: '100%'}}  src={srcVideo}/>
            
         
          <Typography fontSize="2.5rem"      >Join ETS</Typography> 
          <Typography fontSize="1.5rem" margin='20px' color='#e0e0e0'>Welcome to the future of banking </Typography> 
          <Button sx={{ borderRadius: '10px',  bgcolor: '#212121', border: 2,color: 'white'}}  >Join Us</Button>
      
       

        </Box>
    );
}

export default Business;



