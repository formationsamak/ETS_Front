import React from "react";
import {Box, Typography} from "@mui/material";
// @ts-ignore
import srcVideo from "../../asstes/homepageVideo-cover-withFilter.mp4"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Button1 from '../buttons/Buttons';


function Carte() {

    return (
        <Box sx={{
            height: "100vh",
            overflow: "clip",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <video
                style={{position: "absolute", top: 0, zIndex: -1}}
                autoPlay
                loop
                preload="auto"
                src={srcVideo}
                id={"home-video"} muted
            />

            <Box sx={{ paddingLeft: "13rem" }} >
                <Typography fontSize="4rem" color={"#fff"} >Business<br/> Shaped Consultation</Typography>
                <Typography fontSize="2rem" color={"#fff"}>Online bankingb for moddre bussnesses</Typography>

                <Stack spacing={2} direction="row" paddingTop= "30px">
                        <Button1/>
                </Stack>
            </Box>

        </Box>
    );
}

export default Carte;



