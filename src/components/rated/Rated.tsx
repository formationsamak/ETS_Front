import React from 'react'
import {Box, Typography} from "@mui/material";
import srcVideo from "../../asstes/star-5 1.png"
import CardMedia from '@mui/material/CardMedia';
import { Margin, Padding } from '@mui/icons-material';
import Button from '@mui/material/Button';
function Rated() {
  return (
    <Box sx={{
        height: "40vh",
        overflow: "clip",
        position: "relative",
        width: "100vw",
        backgroundColor:'#eeeeee',
        display: 'flex'
        
        }}>

      
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px"
        
        
       }} >

       
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>

        <img src={srcVideo} alt="" /></Box>

        <Box  sx={{ paddingTop: "30px",paddingLeft: "240px",paddingRight: "2px"}}>
              <Typography> Based on 105 reviews</Typography>
        </Box>

      </Box>

      

      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        
        
      }} >

       <Box  sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
         <Typography fontSize="2rem" color='#212121'>Trusted by thousands of business across the EU</Typography> 
        </Box>
       
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>

        <img src={srcVideo} alt="" /></Box>

        <Box  sx={{ paddingTop: "30px",paddingLeft: "240px",paddingRight: "2px"}}>
            <Typography> Based on 105 reviews</Typography>
        </Box>

      </Box>
      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "33%",
        paddingTop: "158px"
       
        
      }} >

       
        
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>

        <img src={srcVideo} alt="" /></Box>

        <Box  sx={{ paddingTop: "30px",paddingLeft: "240px",paddingRight: "2px"}}>
           <Typography> Based on 105 reviews</Typography>
        </Box>

      </Box>
      
    </Box>
  )
}

export default Rated