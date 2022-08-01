import React from 'react'
import {Box, Typography} from "@mui/material";
import srcVideo from "../../asstes/579-5796284_travel-logo-black-and-white-hd-png-download-removebg-preview 1.png"
import srcVideo1 from "../../asstes/—Pngtree—insignia branding symbol of building_5005307 1.png"
import CardMedia from '@mui/material/CardMedia';
import { Margin, Padding } from '@mui/icons-material';
import Button from '@mui/material/Button';
function Ets23d() {
  return (
    <Box sx={{
        width: "100%",
        backgroundColor:'#fff',
        display: 'flex'
        }}>


      <Box sx={{
        width: "50%",
        backgroundColor:'#f4ff81'
       }} >

       <Box  sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
         <Typography fontSize="2.5rem">ETS.2d</Typography>
        </Box>
        <Box  sx={{ textAlign:'center' ,paddingBottom: "7px",paddingTop: "38px"}}>
         <Typography fontSize="1.5rem">Shipping for your business,import <br/> and export around the without limit </Typography>
        </Box>
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
        <img src={srcVideo} alt="" />
        </Box>

        <Box  sx={{ paddingTop: "30px",paddingLeft: "380px",paddingRight: "2px"}}>
            <Button sx={{ paddingLeft: "840px", borderRadius: '10px', padding:'9px 40px', bgcolor: '#f1f1f1',    borderColor: 'black',color: 'black'}} variant="outlined">Find out more
            </Button>
        </Box>

      </Box>

      

      <Box sx={{
        height: "60vh",
        overflow: "clip",
        position: "fixe",
        width: "50%",
        backgroundColor:'#212121'
        
      }} >

       <Box  sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
         <Typography fontSize="2.5rem" color='#fff'>ETS.2d</Typography> 
        </Box>
        <Box  sx={{ textAlign:'center' ,paddingBottom: "7px",paddingTop: "38px"}}>
         <Typography fontSize="1.5rem" color='#fff'>Shipping for your business,import <br/> and export around the without limit </Typography> 
        </Box>
        <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>

        <img src={srcVideo1} alt="" /></Box>

        <Box  sx={{ paddingTop: "30px",paddingLeft: "380px",paddingRight: "2px"}}>
            <Button sx={{ paddingLeft: "840px", borderRadius: '10px', padding:'9px 40px', bgcolor: '#f1f1f1',    borderColor: 'black',color: 'black'}} variant="outlined">Find out more
            </Button>
        </Box>

      </Box>

     
      
    </Box>
  )
}

export default Ets23d