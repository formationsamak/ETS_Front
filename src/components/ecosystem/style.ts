
import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    Body: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: '#ffd600',
            background: '#F7671F',   
        },   
    },
    Body1: {
        [theme.breakpoints.up('lg')]: {
            width:'80%',
            display: 'flex',
            justifyContent: ' space-around',
            alignItems: 'center',
            background: '#F7671F',
            flexDirection: 'row',
            
        },   
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: '#F7671F',
        },   
    },
    Body2: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
           
            // background: '#aed581',
        },   
          
    },
    h1:{
        width:'656px',
        height:'136px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '50px',
        lineHeight: '68px',
        color: '#FFFFFF',
        padding:'20px'
        
    },
    h2:{
        width:'579px',
        height:'88px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#FFF',
        padding:'20px'
        
    },
    img:{
        width:'376.67px',
        height:'350px',
        // background: '#78909c',
    },
   
})