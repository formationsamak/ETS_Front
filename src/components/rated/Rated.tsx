import React from 'react'
import {Box, Typography} from "@mui/material";
import srcVideo from "../../asstes/star-5 1.png"



function Rated() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor:'#eeeeee',
        height:'35vh',
        }}>

      
      <Box 
       sx={{
        display: 'flex',
       
        justifyContent: 'center',
         }} >

        <Typography fontSize="2rem" color='#212121'>Trusted by thousands of business across the EU</Typography> 

      </Box>

      

      <Box 
       sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'space-around' ,
        padding:'20px',
  
        
        }} >

      
        <Box
          sx={{
          
            display: 'flex',
            flexDirection:  'column',
            justifyContent: 'space-between',
          
        
            
            }}
        >
          <Typography fontSize="2rem" color='#212121'>Rated 4.6/5</Typography> 

          <img src={srcVideo} alt="" />
          <Typography> Based on 105 reviews</Typography>
        </Box>


         <Box 
          sx={{
            display: 'flex',
            flexDirection:  'row',
            justifyContent: 'space-aroud',
          
          
            }}
         >

            <Box
             sx={{
             padding:'15px'
              }}
            >
                <img src={srcVideo} alt="" />
                <Typography> Based on 105 reviews</Typography>
            </Box>
            
            <Box
            sx={{
              padding:'15px'
               }}
            
            >
              <img src={srcVideo} alt="" />
              <Typography> Based on 105 reviews</Typography>
            </Box>

         </Box>
       
        

      </Box>

      
      
    </Box>
  )
}

export default Rated