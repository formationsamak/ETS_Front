import React,{Fragment} from 'react'
import { Box,Typography ,Button} from '@mui/material'
import theme from '../../theme';
import {useStyle} from "./style"
import img from '../../asstes/DI_Website-Banner-04-04 1.png'


function Welcoming() {
    const style = useStyle(theme)
      return (
        <>
          <Box sx={style.Body}>
               <Box sx={style.Body1}>
                <Box sx={{ padding:'10px 5px',margin:'10px',}}>
                  <Typography sx={style.h1}>Welcoming everyone to the table</Typography>
                  <Button sx={style.btn}> Obtenez une estimation  </Button>
                </Box>

                  <Box> 
                    <Box component='img' src={img} sx={style.Body1}/> 
                  </Box>
               </Box>
              
          </Box>
        </>
      )
}

export default Welcoming