
import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles({
    footer:{
        borderTop:'2px solid #e8e2da',
        display:'flex',
        flexWrap: 'wrap',
    },
     grid:{
         display: 'flex',
         flexDirection:'column',
     },
     title:{
         fontSize:'16px',
         marginTop:'2rem',
         marginBottom: '1rem',
     },
     copyRight:{
        fontSize:'16px',
        marginTop:'2rem',
        marginBottom: '1rem',
        textAlign:'center',
     },
     sub:{
         marginTop:'.5rem',
     }
})
