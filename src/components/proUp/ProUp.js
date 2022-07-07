import { Dialog, DialogContent, DialogTitle, Typography, IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useStyle } from './style'

export default function ProUp(props) {
    const classes=useStyle()
   const {title, children, openProps, setOpenProps}= props
  return (
    <Dialog open={openProps} maxWidth='md'>
        <DialogTitle>
            <div style={{display: 'flex'}}>
                <Typography className={classes.title} variant='h4' component="div" style= {{flexGrow: 1 }}>
                     {title}
                </Typography>
                <IconButton onClick={()=>setOpenProps(false)}>
                    <CloseIcon sx={{ color:'#f87d09'}} size='50px'/>
                </IconButton>
            </div>
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
    </Dialog>
  )
}
