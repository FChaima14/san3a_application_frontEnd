import { makeStyles } from "@material-ui/core";
import { colors } from "../../styles/Theme";

export const useStyle=makeStyles(theme =>({
    title:{
       color: colors.primary,
       fontFamily:'Dancing Script, cursive',
    },
}))