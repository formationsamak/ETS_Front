import React from "react";
import {Box, Typography} from "@mui/material";
// @ts-ignore
import srcVideo from "../../asstes/fd847150-42ef-4388-8269-0f23783a5394_CTA_banner_background_wx2 (1) 1.png"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Image, Margin, Padding } from "@mui/icons-material";

function Business() {

    return (
        <Box sx={{
            height: "600px",
            overflow: "clip",
            position: "relative",

        }}>
         <img style={{position: "absolute", top: 0, zIndex: -1,    width: '100%'}}  src={srcVideo}/>
            
            
         <Box  sx={{ paddingTop: "138px",paddingLeft: "840px",paddingRight: "211px",paddingBottom: "7px"}}>
         <Typography fontSize="2.5rem">Join ETS</Typography> 
        </Box>
        <Box  sx={{ paddingTop: "29px",paddingLeft: "767px",paddingBottom: '8px',    paddingRight: '258px'}}>
         <Typography fontSize="1.5rem">Welcome to the future of banking </Typography> 
        </Box>
            <Box sx={{ paddingTop: "30px",paddingLeft: "840px",paddingRight: "211px",paddingBottom: "8px"}} >
                <Stack spacing={2} direction="row" paddingTop= "10px">
                    <Button sx={{ borderRadius: '10px', padding:'10px 74px', bgcolor: '#212121', border: 2,color: 'white'}}  >Join Us</Button>
                </Stack>
            </Box>

        </Box>
    );
}

export default Business;



