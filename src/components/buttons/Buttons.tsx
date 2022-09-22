import * as React from 'react';
import Button from '@mui/material/Button';


export default function Buttons() {
  return (
    
      <Button
        sx={{
          width:'200px',
          backgroundColor: '#000',
          backgroundImage: 'none',
          border: '1px solid #000',
          borderRadius: '4px',
          boxShadow: '#fff 4px 4px 0 0, #000 4px 4px 0 1px',
          boxSizing: 'border-box',
          color: '#fff',
          cursor: 'pointer',
          display: 'inline-block',
          fontFamily: 'ITCAvantGardeStd-Bk,Arial,sans-serif',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          margin: '0 5px 10px 0',
          overflow: 'visible',
          padding: '12px 40px',
          textAlign: 'center',
          textTransform: 'none',
          touchAction: 'manipulation',
          userSelect: 'none',
          webkitUserSelect: 'none',
          verticalAlign: 'middle',
          whiteSpace: 'nowrap',
       
          "&:hover":{
            background:'#FFFFFF',
            textColor:'#212121',
            color: '#212121',
            textDecoration: 'none',
           
          },

          '&:focus' :{
            textDecoration: 'none',
          },

          '&:active': {
            boxShadow: 'rgba(0, 0, 0, .125) 0 3px 5px inset',
            outline: '0'
          },
          '&:not([disabled]):active ':{
            boxShadow: '#fff 2px 2px 0 0, #000 2px 2px 0 1px',
            transform: 'translate(2px, 2px)'
          },
          '&:@media (min-width: 768px)': {
          
              padding: '12px 50px'
        
          }
        
         
        }}
      >Primary</Button>
   
  );
}


