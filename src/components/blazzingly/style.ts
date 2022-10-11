
import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    cartes: {
        padding: '44px 20px',
        textAlign: 'left',
        
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            padding: '100px 20px 190px',
            // backgroundColor:'#795548'
        },
    },
    souscart: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '2240px',
            display: 'flex',
            alignItems: 'center',
            gap: '120px',
      
          },
    },
    textPH1: {
        [theme.breakpoints.up('lg')]: {
            display: 'block',
            direction:'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '44px 20px',
            gap: '20px',
            marginTop:'10px',
            // backgroundColor:'#004d40'
            
          },
        
    },
    
    h1:{
        width:'556px',
        height:'132px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '50px',
        lineHeight: '68px',
        color: '#000000',
        padding:'10px',
    },
    
    h2:{
        width:'556px',
        height:'132px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '24px',
        lineHeight: '33px',
        color: '#000000',
        padding:'10px',
        margin:'7px',
    },
    expack:{
        display: 'flex',
        direction:'row',
       
    },
    expedition:{
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '33px',
        color: '#000000',
        margin:'10px',
        padding:'10px',
    },
    tell:{
        fontFamily: 'Noto Sans',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:'18px',
        lineHeight:'22px',
      
        padding:'5px',
    },
    send:{
        fontFamily: 'Noto Sans',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:'18px',
        lineHeight:'22px',
        
        padding:'5px',
        // color: '#7B7B7B'
    },
    lingne:{
        width: '556px',
        transform: 'rotate(-0.12deg)',
        margin:'5px',
        border: '1px solid #D1D0D6',

    }
})