import React,{Fragment} from 'react'
import { Box,Typography} from '@mui/material'
import theme from '../../theme';
import {useStyle} from "./style"



function Contries() {
    const style = useStyle(theme)
      return (
        <>
          <Box sx={style.Body}>

               <Box sx={style.Body1}>
                  <Typography sx={style.H1}>c.50</Typography>
                  <Typography sx={style.H2}>Countries</Typography>
                  <Typography sx={style.H3}>Delivery Hero is present in around 50 countries across four continents.
                     We operate a wide range of local brands that are united behind our shared 
                     mission to always deliver an amazing experience - fast, easy, and to your door.
                  </Typography>
               </Box>

               <Box sx={style.Body1}>
                  <Typography sx={style.H1}>€10.1b</Typography>
                  <Typography sx={style.H2}>GMV</Typography>
                  <Typography sx={style.H3}>In the first quarter of 2022, Delivery Hero generated EUR 10.
                    1 billion Gross Merchandise Value - that equals a year-on-year growth of 31%!
                  </Typography>
               </Box>
               
               <Box sx={style.Body1}>
                  <Typography sx={style.H1}>1,122</Typography>
                  <Typography sx={style.H2}>Dmarts</Typography>
                  <Typography sx={style.H3}>Delivery Hero does not only connect customers with restaurants and shops they love.
                     We also operate 1,122 Dmarts 
                    (small warehouses located in strategically relevant locations for delivery)
                     across the globe by the end of Q1 2022.
                  </Typography>
               </Box>
              
          </Box>
        </>
      )
}

export default Contries