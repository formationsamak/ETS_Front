import React from "react";
import {Box, Typography} from "@mui/material";
// @ts-ignore
import srcVideo from "../../asstes/fd847150-42ef-4388-8269-0f23783a5394_CTA_banner_background_wx2 (1) 1.png"

import Button from '@mui/material/Button';


function Business() {

    return (
        <Box sx={{
            height: "600px",
            overflow: "clip",
            position: "relative",
       

        }}>
         <img style={{position: "absolute", top: 0, zIndex: -1,    width: '100%'}}  src={srcVideo}/>
            
         <Box  sx={{textAlign: "center",paddingTop:'200px'}}>
          <Typography fontSize="2.5rem"      padding='5px'>Join ETS</Typography> 
          <Typography fontSize="1.5rem" padding='15px' color='#e0e0e0'>Welcome to the future of banking </Typography> 
          <Button sx={{ borderRadius: '10px', padding:'10px 74px', bgcolor: '#212121', border: 2,color: 'white'}}  >Join Us</Button>
        </Box>
       

        </Box>
    );
}

export default Business;



