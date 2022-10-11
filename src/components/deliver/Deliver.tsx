import React from 'react'
import { Box,Typography } from '@mui/material'

import theme from '../../theme';

import {useStyle} from "./style"
import photo_send  from "../../asstes/delivery-hero-aiming-higher 1.png"

function Deliver() {
    const style = useStyle(theme)
  return (
    <Box sx={style.cartes}>
        <Box sx={style.carte2}>
         <Box>
            <Typography sx={style.h2}>Our Values</Typography>
            <Typography sx={style.h3}>
                A strong network of riders is the beating heart of our business, making it
                possible to deliver to customers fast and efficiently. With a sophisticated rider fleet and logistics model, 
                we’re always improving our operations, service to customers, and delivery model.
            </Typography>
         </Box>

         <Box>
         <Typography sx={style.h1}>We deliver solutions</Typography>
         </Box>
        </Box>

        <Box> 
            <Box component='img' src={photo_send} sx={style.img}/> 
         </Box>

    </Box>
  )
}

export default Deliver