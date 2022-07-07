import { createTheme } from "@material-ui/core"

export const DrawerWidth = 250;

export const colors={
    primary: '#F87D09',
    secondary: '#004A55',
    succes: '#A7CDCC',
    danger: '#F6F6F6',
    dark: '#0e1b20',
    light: '#aaa',
    //solid colors//
    black: '#000',
    white: '#fff',
    //grey color//
    dark_gray: '#383838',
    gray:'#7F8487',
    light_gray:'#d1d1d1',
}

export const Theme=createTheme({
    palette:{
        primary:{
            main:colors.primary,
        },
        secondary:{
            main: colors.secondary,
        },
        danger:{
              main: colors.gray,
       },
    },
    components: {
        MuiButton: {
          defaultProps: {
            disableRipple: true,
            disableElevation: true,
          },
        },
        MuiTooltip: {
          defaultProps: {
            arrow: true,
          },
          styleOverrides: {
            tooltip: {
              background: colors.primary,
            },
            arrow: {
              color: colors.primary,
            },
          },
        },
        MuiDrawer: {
          styleOverrides: {
            paper: {
              width: DrawerWidth,          
              background: colors.primary,
              color: colors.secondary,
              borderRadius: '0px 100px 0px 0px',
              borderRight: `1px solid ${colors.primary}`
            }
          }
        },
        MuiDivider: {
          styleOverrides: {
            root: {
              borderColor: colors.primary
            }
          }
        },
        MyShopButton: {
          styleOverrides: {
            root: {
              color: colors.white,
            },
            primary: {
              background: colors.primary,
              "&:hover": {
                background: colors.primary
              },
            },
            secondary: {
              background: `${colors.secondary}`,
              "&:hover": {
                background: colors.primary
              },
            },
          },
        },
      },

})
//lighten(0.05, colors.primary),