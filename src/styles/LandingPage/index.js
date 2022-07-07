import { Box , Typography } from "@material-ui/core";
import { colors } from "../Theme";
import { styled } from "@material-ui/styles";

export const ContaierHero=styled(Box)(({theme})=>({
    marginTop: '5rem',
    display: 'flex',
    justifyContent: "center",
    height:'100vh',
    [theme.breakpoints.down('ms')]: {
        flexDirection: "column",
        alignItems: "center",
      },
}))