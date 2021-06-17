import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  notification: {
    margin:"5px",
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    
   
  },
}));
const data = {notification:{gaz:"haw famma gaz",temp:"26 degre",mvt:"",bell:""}};
export default function Notification(props) {
  const [openT, setOpenT ] = React.useState(true);
  const [openG, setOpenG ] = React.useState(true);
  const [openB, setOpenB ] = React.useState(true);
  const [openM, setOpenM ] = React.useState(true);
  const classes = useStyles();
  class TemperatureNotification extends React.Component{
   
    render(){
      const TemperatureNotif=this.props.dataFromParent
      return(
      <div className={classes.notification}>
      <Collapse in={openT}>
          <Alert severity="warning" style={{color:"white",height:"50px",backgroundColor:"#393D43","borderLeftStyle":"solid","borderLeftColor":"#36A2EB","borderLeftWidth":"10px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenT(false);
                      }}>
                      <CloseIcon  />
                  </IconButton>}>
                  {TemperatureNotif}
          </Alert>
          </Collapse>
    </div>
   )}};

   class GazNotification extends React.Component {
    render()
    { 
     const GazNotif=this.props.dataFromParent
      return(
        <div className={classes.notification}>
          <Collapse in={openG}>
          <Alert severity="warning" style={{color:"white",height:"50px",backgroundColor:"#393D43","borderLeftStyle":"solid","borderLeftColor":"#36A2EB","borderLeftWidth":"10px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenG(false);
                      }}>
                      <CloseIcon  />
                  </IconButton>}>
                  {GazNotif}
          </Alert>
          </Collapse>
        </div>
      )}};

      class BellNotification extends React.Component{
        render(){
          const BellNotif=this.props.dataFromParent
          return(
          <div className={classes.notification}>
          <Collapse in={openB}>
          <Alert severity="warning" style={{color:"white",height:"50px",backgroundColor:"#393D43","borderLeftStyle":"solid","borderLeftColor":"#36A2EB","borderLeftWidth":"10px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenB(false);
                      }}>
                      <CloseIcon fontSize="warning" />
                  </IconButton>}>
                  {BellNotif}
          </Alert>
          </Collapse>
        </div>
        )}}
        class MVTNotification extends React.Component {
          render()
          {
            const BellNotif=this.props.dataFromParent
            return(
            <div className={classes.notification}>
            <Collapse in={openM}>
            <Alert severity="warning" style={{color:"white",height:"50px",backgroundColor:"#393D43","borderLeftStyle":"solid","borderLeftColor":"#36A2EB","borderLeftWidth":"10px"}} action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                        setOpenM(false);
                        }}>
                        <CloseIcon fontSize="warning" />
                    </IconButton>}>
                    
                    <div>{BellNotif} <Link to="/streaming">click here to get streaming video</Link></div>
                      
            </Alert>
            </Collapse>
          </div>
          )}};
  return (
    <div >
       
         {props.data.temp? <TemperatureNotification dataFromParent={props.data.temp}></TemperatureNotification> : null } 
         {props.data.gaz? <GazNotification dataFromParent={props.data.gaz}></GazNotification> : null } 
         {props.data.mvt? <MVTNotification dataFromParent={props.data.mvt}></MVTNotification> : null } 
         {props.data.bell? <BellNotification dataFromParent={props.data.bell}></BellNotification> : null } 
          
    </div>
  );
}
