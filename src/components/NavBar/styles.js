import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles({
    txt:{
        fontFamily:'Dancing Script, cursive',

    },
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        margin:'1rem'
    },
    root:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'cneter',
    },
    btnBox:{
        display: 'flex',
        alignItems: 'right',
        right: 0,
    }
})