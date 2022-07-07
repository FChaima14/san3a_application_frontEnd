import { Box , Typography } from "@material-ui/core";
import { colors } from "../Theme";
import { styled } from "@material-ui/styles";

export const AppBarContainer=styled(Box)(()=>({
    display: 'flex',
    arginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'

}))

export const AppBarHeader=styled(Typography)(()=>({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily:'Dancing Script, cursive',
  color: colors.primary,
}))