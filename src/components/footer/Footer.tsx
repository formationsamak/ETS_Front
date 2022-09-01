import * as React from 'react';

import Logo1 from '../../asstes/twitter.png'
import Logo2 from '../../asstes/instagram-symbol (1).png'
import Logo3 from '../../asstes/linkedin.png'
import Logo from '../../asstes/logo.png'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';





const Footer = () => {
  return (
    <Box sx={{

      //  background: 'red',
       padding:'15px 55px',
       margin:'10px'
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p:3,
          m: 1,
          // bgcolor: '#9c27b0',
      
        }}
      >
       <Box><img src={Logo} alt=""  /></Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 3,
          m: 1,
          // bgcolor: '#e1bee7',
       
        }}
      >
             <Box sx={{padding:'10px'}}>

              <Box sx={{ fontSize:'2rem' , fontWeight: '500',}} >Vente</Box>

              <Box>
                <Link  color="inherit">
                  Vente agricole
                </Link>
              </Box>

              <Box>
                <Link  color="inherit">
                  Vente pastoral
                </Link>
              </Box>
             </Box>
         

             <Box>

              <Box sx={{ fontSize:'2rem' , fontWeight: '500',}}>Commence</Box>

              <Box>
                <Link  color="inherit">
                  Commence import 
                </Link>
              </Box>

              <Box>
                <Link  color="inherit">
                Commence import 
                </Link>
              </Box>
             </Box>
       


              <Box>

              <Box sx={{ fontSize:'2rem' , fontWeight: '500',}}>Construction</Box>
              <Box>
                <Link  color="inherit">
                  Construction refection
                </Link>
              </Box>
              <Box>
                <Link  color="inherit">
                Construction batiments
                </Link>
              </Box>
              </Box>
            
         

              <Box>

              <Box sx={{ fontSize:'2rem' , fontWeight: '500',}}>Support</Box>
              
              <Box>
                <Link  color="inherit">
                  Contact
                </Link>
              </Box>

              <Box>
                <Link  color="inherit">
                  Estimation de prix 
                </Link>
              </Box>
            
              </Box>
            
           <Box>

              <Box sx={{ fontSize:'2rem' , fontWeight: '500',}}>Autre</Box>

              <Box>
                <Link  color="inherit">
                  blog
                </Link>
              </Box>

              <Box>
                <Link  color="inherit">
                  FAQ
                </Link>
              </Box>
           </Box>
            
          
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-between',
          p: 3,
          m: 1,
          // bgcolor: '#ffcdd2',
      
        }}
      >
        <Box
        sx={{
          
       
          p:1,
          m: 1,
          bgcolor: 'background.paper',
         
        }}
        
        ><img src={Logo} alt=""  /></Box>
        <Box 
        sx={{
         
          
          m: 1,
          bgcolor: 'background.paper',
         
        }}
        
        >© 2022 ETS Intl AB (publ). Company no: 99999-9999. Regulated by the african society of society (Finansinspektionen) under the Swedish Electronic Money Act (2011:755). License no: 48003.</Box>

        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'nowrap',
          pl:25,
          m: 1,
          bgcolor: 'background.paper',
         
        }}
        >
     
             <Box sx={{ padding:'8px'}}><img src={Logo1} alt=""  /></Box>
             <Box sx={{padding:'8px'}}><img src={Logo2} alt=""  /></Box>
             <Box sx={{padding:'8px'}}><img src={Logo3} alt=""  /></Box>
        
       

        </Box>

      </Box>
      
      
      

    </Box>
  );
}

export default Footer

