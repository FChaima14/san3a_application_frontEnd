import { makeStyles } from "@material-ui/core";
import { color } from "@mui/system";
import { colors } from "../../styles/Theme";


export const useStyle=makeStyles(theme =>({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '400px',    
      },
      media2: {
        objectFit: 'cover',
        width: '100%',
        maxHeight: '200px',    
      },
      card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
      },
      section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
      },
      imageSection: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
      imageSection2: {
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
      loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
        marginTop:'7rem'
      },
      commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      commentsInnerContainer: {
        height: '200px',
        overflowY: 'auto',
        marginRight: '30px',
      },
        title:{
          fontFamily: 'Roboto Serif',
          maxWidth:'500px',
          fontWeight:'700',
          margin: theme.spacing(2),
      },
      creator:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
      },
      creator2:{
        display: 'flex',
        justifyContent: 'space-between',
      },
      avatar:{
        display: 'flex',
        alignItems: 'center'
      },
      avataTxt:{
        marginLeft: theme.spacing(3),
        color: colors.secondary,
        fontSize:'16px',
      },
      para:{
        color: colors.secondary,
        fontFamily: 'Roboto sans-Serif',
        fontSize: '14px',
      },
      recomanded:{
        color: colors.secondary,
      },
      paper:{
        margin: '20px',
        alignItems: 'center'
      }


   
}))