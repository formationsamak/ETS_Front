import React from 'react'
import {Box, Typography} from "@mui/material";

function Carousel() {
  return (
    <Box sx={{
        backgroundColor:'#ff5722',
        textAlign: "center",
        padding: "8rem",
        color: "#fff"
    }}>
         <Typography fontSize="2.5rem">It's time to build</Typography>
         <Typography fontSize="1.5rem"> Whether you are automating your business finances or providing banking services to your customers, Intergiro’s APIs give you the financial toolkit to build, adapt and thrive. </Typography>

    </Box>
  )
}

export default Carousel