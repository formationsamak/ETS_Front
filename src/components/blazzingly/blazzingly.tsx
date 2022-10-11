import React from 'react'
import { Box,Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place'
import theme from '../../theme';

import {useStyle} from "./style"
import photo_send  from "../../asstes/Vector.png"

function Blazzingly() {
    const style = useStyle(theme)
      return (
        <Box sx={style.cartes}>

            <Box sx={style.souscart}>

              <Box sx={style.textPH1}>

                <Box>
                    <Typography sx={style.h1}>Your ⚡ blazzingly fast delivery service</Typography>
                    <Typography sx={style.h2}>ETS is a logistics company courier, package delivery 
                      and express mail <br/> service. It helps business owners to send documents, packages, parcels 
                      and letters to the desired destination
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={style.tell}> <PlaceIcon/> Tell us your pick up destination</Typography>
                    <Typography sx={style.tell}> <PlaceIcon/> Tell us your where to deliver your package</Typography>
                    <Typography sx={style.send} >Send anywhere, road, air and ocean freight available !</Typography>
                    <Box sx={style.lingne}></Box>
                </Box>
                
                <Box sx={style.expack}>
                   <Box>
                      <Typography sx={style.expedition}>24/7</Typography>
                      <Typography sx={style.expedition}>Expedition</Typography>
                    </Box>
                    
                    <Box>
                      <Typography sx={style.expedition}>5M+</Typography>
                      <Typography sx={style.expedition}>Packages Delivered</Typography>
                    </Box>
                </Box>

              </Box>

              <Box> 
                <Box component='img' src={photo_send}/> 
              </Box>

            </Box>

        </Box>
      )
}

export default Blazzingly