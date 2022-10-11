
import Theme from "../../theme";

export const useStyle = (theme: typeof Theme) =>  ({
    Body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '380px',
        gap:'20px' ,
        // background: '#F1F2F3',    
    },
    Body1: {
        display: 'flex',
        flexDirection: 'row' ,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '300',
        height: '180px',
        padding:'20px',
        // backgroundColor:'#689f38',
     
    },
    h1:{
        width: '247px',
        height:' 66px',
        left:' 494px',
        top: '861px',
        fontFamily:'Noto Sans',
        fontStyle: 'normal',
        fontWeight:' 500',
        fontSize: '26px',
        lineHeight:' 33px',

        color: '#000000',

    },
    btn:{
        width:'247px',
        height:'40px',
        fontFamily:'Noto Sans',
        fontStyle: 'normal',
        fontWeight:' 500',
        fontSize: '16px',
        lineHeight:' 22px',
        color: '#000000',
        margin:'10px',
        background:'#F7671F',
        borderRadius:'5px',
    },
    img:{
        width: '173px',
        height: '180px',
        left: '797px',
        top: '837px',
    }
    
})