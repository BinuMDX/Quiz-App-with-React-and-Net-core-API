import { MinimizeSharp } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'

export default function Center(props) {
  return (
    <Grid container
    direction="column"
    justifyContent="center"
    alignItems="center" style={{minHeight: "100vh", minWidth: "100vh"}}>
      <Grid item xs={1} align="center">
        {props.children}
      </Grid>
    </Grid>
  )
}
