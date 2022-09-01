import React from 'react'
import {Box, Typography} from "@mui/material";

function Carousel() {
  return (
    <Box sx={{
        backgroundColor:'#ff5722',
        textAlign: "center",
        padding: "8rem",
        color: "#fff"
    }}>
         <Typography fontSize="2.5rem">It's time to build</Typography>
         <Typography fontSize="1.5rem"> Whether you are automating your business finances or providing banking services to your customers, Intergiro’s APIs give you the financial toolkit to build, adapt and thrive. </Typography>

    </Box>
  )
}

export default Carousel



// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import Logo from '../../asstes/Group 1 (9).png'

// import Typography from '@mui/material/Typography';



// export default function Footer() {
//   return (
//     <footer>

//       <Box
//         px={{ xs: 3, sm: 10 }}
//         py={{ xs: 5, sm: 10 }}
//         bgcolor="text.secondary"
//         color="white"
//         paddingTop='-50px'
//       >
      
//           <Typography
//             variant="h5"
           
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
             
              
//             }}
//           >
//           <img src={Logo} alt=""  />
//           </Typography>

//         <Container maxWidth="lg">

        

//           <Grid container spacing={5}  sx={{ 
//             display: 'flex',
//             flexDirection: 'row',
            
//           }}>

//             <Grid item xs={12} sm={4} >
//               <Box >Vente</Box>

//               <Box>
//                 <Link  color="inherit">
//                   Vente agricole
//                 </Link>
//               </Box>

//               <Box>
//                 <Link  color="inherit">
//                   Vente pastoral
//                 </Link>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Box>Commence</Box>

//               <Box>
//                 <Link  color="inherit">
//                   Commence import 
//                 </Link>
//               </Box>

//               <Box>
//                 <Link  color="inherit">
//                 Commence import 
//                 </Link>
//               </Box>
             
//             </Grid>


//             <Grid item xs={12} sm={4}>
//               <Box>Construction</Box>
//               <Box>
//                 <Link  color="inherit">
//                   Construction refection
//                 </Link>
//               </Box>
//               <Box>
//                 <Link  color="inherit">
//                 Construction batiments
//                 </Link>
//               </Box>
            
//             </Grid>

//             <Grid item xs={12} sm={4}>
//               <Box>Support</Box>
              
//               <Box>
//                 <Link  color="inherit">
//                   Contact
//                 </Link>
//               </Box>

//               <Box>
//                 <Link  color="inherit">
//                   Estimation de prix 
//                 </Link>
//               </Box>
            
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Box>Autre</Box>

//               <Box>
//                 <Link  color="inherit">
//                   blog
//                 </Link>
//               </Box>

//               <Box>
//                 <Link  color="inherit">
//                   FAQ
//                 </Link>
//               </Box>
            
//             </Grid>
//           </Grid>

//           <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
//             Material UI Workshop &reg; {new Date().getFullYear()}
//           </Box>


//         </Container>
        
//       </Box>


//     </footer>
//   );
// }