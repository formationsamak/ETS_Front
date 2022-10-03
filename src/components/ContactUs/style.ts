import Theme from "../../theme";


export const useStyle = (theme: typeof Theme) =>  ({
    contactUs: {
        padding: '44px 20px',
        textAlign: 'left',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            padding: '200px 20px 190px',
        },
    },
    wrapper: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '2240px',
            display: 'flex',
            alignItems: 'center',
            gap: '310px',
        },
    },
    form: {
        maxWidth: '713px',
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
        },
    },
    itemBlockInfo: {
        background: '#F1F2F3',
        borderRadius: '5px'
    },
    input: {
        display: 'flex',
        gap: '25px',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '10px'
        },
    },
    textField: {
        width: '300px',
        background: '#F1F2F3',
        borderRadius: '5px',
        '& input::placeholder': {
            fontSize: '20px',
            lineHeight: '20px',
        },
    },
    paddings: {
        padding: '10px'
    },
    buttons: {
        width: '174px',
        height: '40px',
        background: '#000000',
        borderRadius: '5px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#FFFFFF',
    },
    h: {
        width: '386px',
        height: '99px',
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '24px',
        lineHeight: '33px',
        color: '#000000'
    }
})