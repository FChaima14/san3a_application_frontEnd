import { makeStyles } from "@material-ui/core";
import { colors } from "../../styles/Theme";


export const useStyle=makeStyles(theme =>({
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        marginTop: '1rem '
    },
    appSearch:{
        borderRadius:4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px'
    },
    pagination:{
        borderRadius: 4,
        padding: '8px'     
    },
    gridContainer:{
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    search:{
        marginTop:'8rem'
    },
    form:{
        padding: theme.spacing(3),
        margin: theme.spacing(5),

    },
    boxAdd:{
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(3),
        
    },
    txt:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        justifyContent: 'center',
        padding:'16px',
    },
    para:{
        color:colors.secondary,
        fontSize: '16px'
        
    }
}))