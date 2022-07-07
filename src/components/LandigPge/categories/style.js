import { makeStyles } from "@material-ui/core";

export const useStyle=makeStyles((theme)=>({
    root:{
       padding: theme.spacing(2),
       height: '400px',
    },
     image:{
         width:'100%',
         objectFit: 'cover' ,
         height:'400px',
         zIndex:1,
     },
}))