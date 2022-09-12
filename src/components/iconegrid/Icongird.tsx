import React from 'react'
import {Box} from "@mui/material";
import icon1 from "../../asstes/Vector-1.png"
import icon2 from "../../asstes/FundOf Logotype black 1.png"
import icon3 from "../../asstes/DABlogo_noir-2 1.png"
import icon4 from "../../asstes/Konvi Logo 1 1.png"
import icon5 from "../../asstes/QB_logo_Black@4x 1.png"
import icon6 from "../../asstes/Vector-2.png"

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// {/* <Grid sx={{ background: "yellow" }} item xs={12} sm={6} md={4} lg={3} xl={2}>Item{" "}</Grid> */}



function Icongird() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        backgroundColor:'#eeeeee',
        height:'50vh',
        flexWrap: 'wrap'
        
        }}>

           <Box sx={{  textAlign:'center',paddingBottom: "7px",paddingTop: "38px",}}>
            <img src={icon1} alt="" />
          </Box>

          <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
           <img src={icon2} alt="" />
          </Box>
        

          <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
            <img src={icon3} alt="" />
          </Box>
          

          <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
            <img src={icon4} alt="" />
          </Box>
    

          <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
            <img src={icon5} alt="" />
          </Box>
 
            
          <Box sx={{  textAlign:'center', paddingBottom: "7px",paddingTop: "38px"}}>
              <img src={icon6} alt="" />
          </Box>
    
      
       
    </Box>
  )
}

export default Icongird




// import React from 'react'
// import {Box,Grid} from "@mui/material";

// import icon1 from "../../asstes/Vector-1.png"
// // import icon2 from "../../asstes/FundOf Logotype black 1.png"
// // import icon3 from "../../asstes/DABlogo_noir-2 1.png"
// // import icon4 from "../../asstes/Konvi Logo 1 1.png"
// // import icon5 from "../../asstes/QB_logo_Black@4x 1.png"
// // import icon6 from "../../asstes/Vector-2.png"




// function Icongird() {
//   return (
//     <Box sx={{bgcolor:'#f4f4f4'}}>
//        <Grid sx={{  textAlign:'center',height:'15vh'}} item xs={12} sm={6} md={4} lg={3} xl={2} ></Grid>
//           <Grid container sx={{  textAlign:'center',height:'15vh'}} >
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
//             <Grid sx={{  textAlign:'center',flexWrap: 'wrap'}} item xs={12} sm={6} md={4} lg={3} xl={2} > <Box> <img src={icon1} alt="" /> </Box></Grid>
   
//           </Grid>
//       <Grid sx={{  textAlign:'center',height:'15vh'}} item xs={12} sm={6} md={4} lg={3} xl={2} > </Grid>
//   </Box>
//   )
// }

// export default Icongird



