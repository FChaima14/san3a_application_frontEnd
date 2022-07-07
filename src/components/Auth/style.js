import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles(theme =>({
    btn:{
        marginTop: theme.spacing(2),
        padding:'.5rem 0',
        borderRadius:'30px',
    },
    signBtn:{
        marginTop:'10px',
        display: 'flex',
        alignItems: 'flex-end',
        background:'none',
        color:'#3b4d61',
        fontSize:'14px',

    }
}))