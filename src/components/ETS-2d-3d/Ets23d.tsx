import React from 'react'
import {Box, Typography} from "@mui/material";
import srcVideo from "../../asstes/579-5796284_travel-logo-black-and-white-hd-png-download-removebg-preview 1.png"
import srcVideo1 from "../../asstes/—Pngtree—insignia branding symbol of building_5005307 1.png"
import Button1 from '../buttons/Buttons';


function Ets23d() {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        width: "100%",
        backgroundColor:'#fff',
        }}>


      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        width: "50%",
        padding:'15px',
        backgroundColor:'#fff'
       }} >


        <Typography fontSize="2.5rem">ETS.2d</Typography>
  
        <Typography fontSize="1.5rem">Shipping for your business,import <br/> and export around the without limit </Typography>

        <Box >
             <img src={srcVideo} alt="" />
        </Box>

      
        <Button1/>


      </Box>

      

      <Box sx={{
         display: 'flex',
         justifyContent: 'space-around',
         flexDirection: 'column',
         alignItems: 'center',
         width: "50%",
         padding:'15px',
         backgroundColor:'#000'
        
      }} >

       
         <Typography fontSize="2.5rem" color='#fff'>ETS.2d</Typography> 
        
      
         <Typography fontSize="1.5rem" color='#fff'>Shipping for your business,import <br/> and export around the without limit </Typography> 
       
        <Box>
           <img src={srcVideo1} alt="" />
        </Box>

       
        {/* <Button
          sx={{ 
          paddingLeft: "840px",
          borderRadius: '10px',
          padding:'9px 40px',
          bgcolor: '#f1f1f1', 
          borderColor: 'black',
          color: 'black'}}variant="outlined">

              Find out more

        </Button> */}

         <Button1/>


      </Box>

     
      
    </Box>
  )
}

export default Ets23d