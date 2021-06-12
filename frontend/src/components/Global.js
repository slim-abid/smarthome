import React, { Component } from 'react'
import {  ThemeProvider } from '@material-ui/core';
import NavigationBar from './NavigationBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    textAlign: 'center',
    color: "white",
    backgroundColor:"#18213D"
  },
}));
const themeDark = createMuiTheme({
    palette: {
      primary: {
        main: "#121834",
        light:'#18213D'
      },
      secondary: {
        main: "#1A244F",
        light: '#439BBF',
      },
      background:{
        default:"#121834"
      }
    }
  });
  export default function Global() {
    const classes = useStyles();
  
    return (
      <MuiThemeProvider theme={themeDark}>
      <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={2}  >
                  <Grid item xs={1}  >
                    <Paper className={classes.paper}><NavigationBar/></Paper>
                  </Grid>
                <Grid container xs={11} spacing={2} style={{marginTop:"10px"}}>
                      <Grid item xs={6}  >
                      <Paper className={classes.paper}>xs=6</Paper>
                      </Grid>
                      <Grid item xs={6}  >
                      <Paper className={classes.paper}>xs=6</Paper>
                      </Grid>
                    
                  </Grid>
                  </Grid>
                
            </div>
      </MuiThemeProvider>
        );
    }

