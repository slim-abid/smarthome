import React, { Component } from 'react'
import {  ThemeProvider } from '@material-ui/core';
import NavigationBar from './NavigationBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Route, BrowserRouter, Switch ,Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import HomePage from './HomePage'
import Dashboard from './Dashboard.component';
import Streaming from './Streaming'
import Energy from './Energy'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    textAlign: 'center',
    color: "white",
    backgroundColor:"#1A244F",
  },
  paper2: {
    
    textAlign: 'center',
    background:"none",
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
      <BrowserRouter>
            <div className={classes.root} >
                <Grid container spacing={1}  style={{height: '100vh'}}>
                  <Grid item xs={1}  >
                    <Paper className={classes.paper} style={{height: '100%'}}><NavigationBar/></Paper>
                  </Grid>
                <Grid container xs={11} spacing={2} style={{marginTop:"10px",paddingLeft:"10px"}}>
                      <Grid item xs={12}  >
                      <Paper className={classes.paper2}>
                        <Switch>
                    
                            <Route path="/" exact={true} component={Dashboard} />
                            <Route path="/energy" component={Energy} />
                            <Route path="/streaming" component={Streaming} />
                            
                        </Switch>
                      </Paper>
                      </Grid>
                      
                      
                      
                    
                  </Grid>
                  </Grid>
                
            </div>
            
            </BrowserRouter>
      </MuiThemeProvider>
        );
    }

