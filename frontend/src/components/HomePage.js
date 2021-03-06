import React from 'react';
import Background from '../images/background.png'
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import http from "./http-common";



import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  contact:{
    position:'relative',
    marginLeft:'15em',
    backgroundColor: "#FFF",
    borderRadius:"20px",
    border: "none",
    color: "#372279",
    padding: "5px 25px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "12px",
    margin: "14px 22px",
    cursor: "pointer",
      },
      contact2:{
        position:'relative',
        marginLeft:'20em',
        backgroundColor: "#FFF",
        borderRadius:"20px",
        border: "none",
        color: "#372279",
        padding: "5px 25px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "12px",
        margin: "14px 22px",
        cursor: "pointer",
          },
  appBarStyle:{
    backgroundColor:"#372279",
    alignItems: 'flex-start',
  },
  toolbarStyle:{
    width:'100%'
  },

   loginButton:{
     width:200,
     height:50,
     fontSize:'1em',
     "&:hover": {
      backgroundColor: '#342177',
      boxShadow: 'none',
      color:'#FFFFFF',
      
    },
   },
   buttonDiv:{
   paddingTop:'20%',
     paddingLeft:'10%',
   },
   inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  title1:{
    color:'#FFF'
  },
  title2:{
    color:'#06D6A0'
  },
  titleDiv:{
   marginRight:'60%'
    
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width:300,
    marginBottom:'1em'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #89BFC7',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'40%',
     backgroundColor:'#D6E1DB',
     [theme.breakpoints.up('md')]: {
      width:400,
    },
    [theme.breakpoints.up('lg')]: {
      width:400,
    },
    [theme.breakpoints.up('xl')]: {
      width:400,
    },
    [theme.breakpoints.up('sm')]: {
      width:400,
    },
  },
    
    
  }));
function Home(props) {

    const classes = useStyles();
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    ///////
    const [values, setValues] = React.useState({
      password: '',
      weightRange: '',
      showPassword: false,
    });
  
    
    const handleChangeP = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      setPassword(event.target.value);
    };
  
    const handleClickShowPassword = (event) => {
      setValues({ ...values, showPassword: !values.showPassword });
      
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    ////////


    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }

    
  
   
    ////////
    const handleOpen = () => {
      setOpen(true);
    };
    const onChangeUsername = (event) => {
      event.preventDefault();
      setUsername(event.target.value);
      console.log(username);
    }

    const handleClose = () => {
      setOpen(false);
    };
    const onSubmitHandler = (event) =>{
    
        event.preventDefault();
    const formData = {
      email : username,
      password: password
    }
    http.post('login/',formData)
    .then(res => {
      if (res.status === 200) {
       console.log('done succesfully!')
       handleClose();
       props.onAuthenticated(true);
      } else { 
        console.log('response status is ',res.status)
         
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.log('error and data are ','formData')
      console.error(err);
      alert('Error logging in please try again');
    });
      }
 
   
  
   
  
   
  
    const menuId = 'primary-search-account-menu';
    return (
      <>
      <AppBar className={classes.appBarStyle}>
          <Toolbar className={classes.toolbarStyle}>
            
            <div className={classes.titleDiv}>
            <Typography variant="h5" className={classes.title1} display="inline" >
              Smart
            </Typography>
            <Typography variant="h5" className={classes.title2} display="inline" >
              Home
            </Typography>
            </div>
            <IconButton edge="end"><div className={classes.contact}>Contact Us</div></IconButton>
            <IconButton edge="end"><div className={classes.contact2}>Our Services</div></IconButton>
            
                          
           
          </Toolbar>
        </AppBar>
        <div className={classes.grow} style={{
          backgroundImage: `url(${Background})`,
          backgroundSize:'100%',
          height:'650px',
          backgroundPosition: 'center', /* Center the image */
          backgroundRepeat: 'no-repeat', /* Do not repeat the image */
          backgroundSize: 'cover', /* Resize the background image to cover the entire container */
          padding:0,
          margin:-8,
            }}>
              
            
            <div className={classes.buttonDiv}>
            <Typography variant="subtitle1" className={classes.text} display="block" >
            Home is where the comfort is. The real comfort lies in living smart and simple! 
            </Typography>
            <Button variant="outlined" className={classes.loginButton}  size="large" onClick={handleOpen} color="primary">
              Login
            </Button>
            </div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Container maxWidth="md" className={classes.paper}>
          <div  >
              <form className={classes.form} onSubmit={onSubmitHandler}>
                <Toolbar>
                  <TextField onChange={onChangeUsername} id="standard-basic1" label="Username" name="Username" margin="normal" fullWidth={true} required={true} />
                </Toolbar>
                <Toolbar>
                <FormControl fullWidth={true}
                            required={true}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                            fullWidth={true}
                            required={true}
                              id="standard-adornment-password"
                              type={values.showPassword ? 'text' : 'password'}
                              value={values.password}
                              onChange={handleChangeP('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                            </FormControl>
                </Toolbar>
                <Box display="flex" justifyContent="center" m={1} p={1} >
                  <Button type="submit" fullWidth={true} className={classes.loginButton} variant="contained" color="primary" disableElevation>
                    Log in
                  </Button>
                </Box>
            </form>
          </div>
          </Container>
        </Fade>
      </Modal>
        </div>
        </>
    )
}

export default Home
