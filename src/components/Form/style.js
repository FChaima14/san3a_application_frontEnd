import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1),
        }
    },
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        margin: '1rem '
    },
    file:{
        margin: theme.spacing(1),
    },
    btnBx:{
        display: 'flex',
        margin: theme.spacing(1),
    }
}))