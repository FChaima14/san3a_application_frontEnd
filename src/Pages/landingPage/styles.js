import {makeStyles } from '@material-ui/core'

export const useStyle=makeStyles({
    navB:{
        background:'#fcfcfc'
    },
    tool:{
        display: 'flex',
        justifyContent:'space-between'
    },
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        marginLeft: '1rem '
    },
    txt:{
        fontFamily:'Dancing Script, cursive',
        textDecoration: 'none',
    }
})