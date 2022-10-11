
import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    Body: {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '380px',
        background: '#F1F2F3', 
        flexDirection: 'column' , 
        gap:'20px' ,
       
        [theme.breakpoints.up('sm')]: {
         
            flexDirection: 'row',
            alignItems: 'center',
          
        },
    },
    Body1: {
        [theme.breakpoints.up('lg')]: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center',
        height: '180px',
      
    },
        
     
    },
    H3:{
        width:'367px',
        height:'110px',
        fontFamily: 'Noto Sans',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'16px',
        lineHeight:'22px',
        padding:'5px',
        color: '#000',
    },
    H1:{
        fontFamily: 'Noto Sans',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'36px',
        lineHeight:'44px',
        padding:'5px',
        color: '#000',
    },
    H2:{
        fontFamily: 'Noto Sans',
        fontStyle:'normal',
        fontWeight:'500',
        fontSize:'24px',
        lineHeight:'33px',
        padding:'5px',
        color: '#000'
    }
  
})