
import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    cartes: {
       with:'100%',
       pasition:'relative',
    
    },
    cartes1: {
        [theme.breakpoints.up('lg')]: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        },
     
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
              flexDirection: 'column',
              
        }, 
    },
    cartes2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-around',
        // backgroundColor:'#6d4c41',
        paddingTop:'10px',
        height:'484px',
    },

    img: {
        width:'589px',
        height:'584px',
        position: 'relative',
        top:'-25px'
     
    },
    img1: {
        width:'88px',
        height:'73px',
        
    },
    h3:{
        width: '459px',
        height:' 117px',
        paddingTop:'10px',
        fontFamily:'Noto Sans',
        fontStyle: 'normal',
        fontWeight:' 500',
        fontSize: '26px',
        lineHeight:' 33px',

        color: '#000000',

    },
    h1:{
        paddingTop:'10px',
        fontSize: '36px',
        color: '#000000',

    },
   
})