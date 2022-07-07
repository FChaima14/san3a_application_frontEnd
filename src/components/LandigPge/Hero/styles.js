import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles({
    root:{
        marginTop: '5rem',
        height: '60vh'
    },
    hero_title:{
        marginTop:'3rem',
        fontSize:'60px',
        maxWidth:'400px',
        fontWeight: '700',
        fontFamily: 'Dancing Script',
    },
    para:{
        fontSize:'24px',
        marginTop:'2rem',
    },
    btn:{
        outline: 'none',
        borderRadius: '20px',
        marginTop:'2rem',
        padding:'.5rem 2rem',
    },
    squard:{
        backgroundColor:'primary',
        top: '20rem',
        left: '4rem',
        height: '3rem',
        width:'10rem',
    },
    cardImage:{
        height:'50%',
        width:'80%',
        margin: '1rem 2rem 2rem 2rem'
    }

})