import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles({
    aboutTitle:{
        fontFamily: 'Roboto Serif',
        textAlign: 'center',
        fontSize: '40px',
        marginTop:'5rem',
        fontWeight:'700'
    },
    aboutTitlePara:{
        fontFamily: 'Roboto Serif',
        textAlign: 'center',
        fontSize: '14px',
        marginTop:'1rem',
        fontWeight:'700'
    },
    btn:{
        outline: 'none',
        borderRadius: '20px',
        padding:'.5rem 2rem',
        marginTop: '1rem '
    },
    boxgrid:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
    },
    imgBox:{
       width: '250px',
       height:'250px',
    },
    image:{
        height:'100%',
        width:'100%',
    },
    box:{
        display: 'flex',
        //margin:'1rem',
        padding: '2rem',
        justifyContent: 'center',
        alignItems:'center',
    },
    subTitle:{
        fontWeight:'700',
        fontSize:'16px',
    },
    Para:{
        fontSize:'16px',
        textAlign: 'center',
        marginTop: '.5rem',
        maxWidth:'300px',
    }

})