import { makeStyles } from "@material-ui/core";
import { colors } from "../../../styles/Theme";

export const useStyle=makeStyles({
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        marginTop: '1rem '
    },
    icons:{
        display: 'flex',
    },
    edit:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'right',
    },
    tags:{
        color: colors.gray,
        fontSize: '14px'
    }
})