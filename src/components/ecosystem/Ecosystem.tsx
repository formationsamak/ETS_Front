import React,{Fragment} from 'react'
import { Box,Typography} from '@mui/material'
import theme from '../../theme';
import {useStyle} from "./style"
import img from '../../asstes/delivery-hero-ecosystem-1 1.png'


function Ecosystem() {
    const style = useStyle(theme)
      return (
        <>
          <Box sx={style.Body}>
               <Box sx={style.Body1} >

                <Box sx={style.Body2}>
                  <Typography sx={style.h1}>
                  Our ecosystem: a mission to deliver anything
                  </Typography>
                  <Typography sx={style.h2} >
                   As the world’s leading local delivery platform, we work with a large 
                   global ecosystem of riders, restaurants, shops and partners. From prepared
                   meals to groceries, flowers, coffee, medicine…
                   our fleets deliver whatever you need – fast, easy and to your door.
                  </Typography>
                </Box>

                  <Box> 
                    <Box component='img' src={img} sx={style.img} /> 
                  </Box>
               </Box>
              
          </Box>
        </>
      )
}

export default Ecosystem