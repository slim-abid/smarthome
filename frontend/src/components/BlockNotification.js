import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  notification: {
    margin:"5px",
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
   
  },
}));
export default function Notification() {
  const [openT, setOpenT ] = React.useState(true);
  const [openG, setOpenG ] = React.useState(true);
  const [openB, setOpenB ] = React.useState(true);
  const [openM, setOpenM ] = React.useState(true);
  const classes = useStyles();
  const TemperatureNotification = () => {
    return(
      <div className={classes.notification}>
      <Collapse in={openT}>
          <Alert color="warning" severity="warning" style={{height:"50px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenT(false);
                      }}>
                      <CloseIcon  />
                  </IconButton>}>
          contenue de notification de Gaz !
          </Alert>
          </Collapse>
    </div>
    )};

    const GazNotification = () => {
      return(
        <div className={classes.notification}>
          <Collapse in={openG}>
          <Alert color="warning" severity="warning" style={{height:"50px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenG(false);
                      }}>
                      <CloseIcon  />
                  </IconButton>}>
          contenue de notification de Gaz !
          </Alert>
          </Collapse>
        </div>
      )};

      const BellNotification = () => {
        return(
          <div className={classes.notification}>
          <Collapse in={openB}>
          <Alert color="warning" severity="warning" style={{height:"50px"}} action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenB(false);
                      }}>
                      <CloseIcon fontSize="warning" />
                  </IconButton>}>
                  <div>Bell alert <Link to="/streaming">click here to get streaming video</Link></div>
                    
          </Alert>
          </Collapse>
        </div>
        )};
        const MVTNotification = () => {
          return(
            <div className={classes.notification}>
            <Collapse in={openM}>
            <Alert color="warning" severity="warning" style={{height:"50px"}} action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                        setOpenM(false);
                        }}>
                        <CloseIcon fontSize="warning" />
                    </IconButton>}>
                    <div>MVT alert <Link to="/streaming">click here to get streaming video</Link></div>
                      
            </Alert>
            </Collapse>
          </div>
          )};
  return (
    <div >
    
          <TemperatureNotification></TemperatureNotification>
          <GazNotification></GazNotification>
          <MVTNotification></MVTNotification>
          <BellNotification></BellNotification>
  
    </div>
  );
}
