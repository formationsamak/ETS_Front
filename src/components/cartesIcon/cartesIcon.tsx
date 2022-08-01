import React from 'react'
import {Box, Typography} from "@mui/material";

function CartesIcon() {
  return (
    <Box sx={{
        height: "50vh",
        overflow: "clip",
        position: "relative",
        width: "100%",
        backgroundColor:'#fafafa'
        
    }}>
        <Box  sx={{ paddingTop: "138px",paddingLeft: "640px",paddingRight: "211px",paddingBottom: "78px"}}>
         <Typography fontSize="2.5rem"> An all-in-one financial toolkot for PSPs</Typography> 
        </Box>
        <Box  sx={{ paddingTop: "49px",paddingLeft: "787px",paddingBottom: '78px',    paddingRight: '258px'}}>
         <Typography fontSize="1.5rem">YOU ARE IN COMPANY </Typography> 
        </Box>

    </Box>
  )
}

export default CartesIcon
