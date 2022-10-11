import React from 'react'
import { Box,Typography } from '@mui/material'

import theme from '../../theme'
import {useStyle} from "./style"
import photo_homme  from "../../asstes/Delivery-Hero-corporate-3 1.png"
import photo_velo  from "../../asstes/Riders 1.png"


const Modal = () => {
    const style = useStyle(theme)
  return (
    <>
       <Box sx={style.cartes}>

           <Box sx={style.cartes1}>

              <Box>  <Box component='img' src={photo_homme} sx={style.img}  /> </Box>

               <Box sx={style.cartes2}>
                  <Box component='img' src={photo_velo} sx={style.img1}/>
                  <Typography sx={style.h1}> Countries </Typography>
                  <Typography sx={style.h3}> 
                     A strong network of riders is the beating heart of 
                     our business, making it possible to deliver to customers fast and efficiently.
                     With a sophisticated rider fleet and logistics model,
                     we’re always improving our operations, service to customers, and delivery model.
                  </Typography>
               </Box>

           </Box>

       </Box>
    </>
  )
}

export default Modal