

import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    cartes: {
        [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '498px',
        flexDirection: 'row',
        backgroundColor:'#9e9e9e',
        },
        [theme.breakpoints.up('sm')]: {
            with:'100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            
            backgroundColor:'#9e9e9e',
          
        },
    },

    carte2: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        // backgroundColor:'#ffab91',
        height: '498px',
    },
   
    
    h1:{
 
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '50px',
        lineHeight: '33px',
        color: '#000000', 
    },
    h2:{
        
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '30px',
        lineHeight: '33px',
        color: '#000000', 
    },
    h3:{
        width:'856px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '24px',
        lineHeight: '33px',
        color: '#000000', 
    },
    img:{
        width: '375px',
        height: '498px',
    }
   
   
})