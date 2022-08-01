import React from 'react'
import {Box, Typography} from "@mui/material";

function Carousel() {
  return (
    <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "relative",
        width: "100vw",
        backgroundColor:'#ff5722'
        
    }}>
        <Box  sx={{ paddingTop: "138px",paddingLeft: "800px",paddingRight: "211px",paddingBottom: "78px"}}>
         <Typography fontSize="2.5rem">It's time to build</Typography> 
        </Box>
        <Box  sx={{ paddingTop: "49px",paddingLeft: "527px",paddingBottom: '78px',    paddingRight: '258px',alignItems:'center'}}>
         <Typography fontSize="1.5rem"> Whether you are automating your business finances or providing banking services to your customers, Intergiro’s APIs give you the financial toolkit to build, adapt and thrive. </Typography> 
        </Box>

    </Box>
  )
}

export default Carousel