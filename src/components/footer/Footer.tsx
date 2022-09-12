import * as React from 'react';
import Logo1 from '../../asstes/twitter.png'
import Logo2 from '../../asstes/instagram-symbol (1).png'
import Logo3 from '../../asstes/linkedin.png'
import Logo from '../../asstes/logo.png'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Typography ,Container} from '@mui/material';






const Footer = () => {
  return (
    <Container 
     sx={{ 
       display: 'flex',
       flexDirection: 'column',
       alignItems:'stretch',
      }} maxWidth="xl">
  
  

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p:'30px'

          
        }}
        >
       <Box><img src={Logo} alt=""/></Box>
      </Box>

      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:'30px'
        
      }}>

      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>
          <Typography sx={{ fontSize:'2rem' , fontWeight: '500',}}> Vente</Typography>
          <Link  color="inherit">Vente agricole </Link>
          <Link  color="inherit"> Vente pastoral</Link>
       </Box> 

      </Box>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
          padding:'30px'
        }}>

        <Box sx={{display: 'flex',flexDirection: 'row', }}> <img src={Logo} alt=""/> </Box>


        <Box  >
            <Typography> © 2022 ETS Intl AB (publ). Company no: 99999-9999.Regulated by the african society of
            society <br /> (Finansinspektionen) under the Swedish Electronic Money Act (2011:755). License no: 48003.
            </Typography>
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center',
            }}>
      
            <Box sx={{ padding:'8px'}}><img src={Logo1} alt=""  /></Box>
            <Box sx={{padding:'8px'}}><img src={Logo2} alt=""  /></Box>
            <Box sx={{padding:'8px'}}><img src={Logo3} alt=""  /></Box>
        
        </Box>

     </Box>
      

  
   </Container>
  );
}

export default Footer



