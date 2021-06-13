import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import '../App.css'
import { render } from 'ejs';
//import CloseIcon from '@material-ui/icons/Close';
export default function Notification() {
  const [openT, setOpenT ] = React.useState(true);
  const [openG, setOpenG ] = React.useState(true);
  const [openB, setOpenB ] = React.useState(true);
  const [openM, setOpenM ] = React.useState(true);

  class TemperatureNotification extends React.Component{
   
    render(){
      const TemperatureNotif=this.props.dataFromParent
      return(
      <div className="TemperatureNotification">
      <Collapse in={openT}>
      <Alert color="warning" severity="warning" action={
              <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                  setOpenT(false);
                  }}>
                 
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
        <div className="GazNotification">
          <Collapse in={openG}>
          <Alert color="warning" severity="warning" action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenG(false);
                      }}>
                      
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
          <div className="BellNotification">
          <Collapse in={openB}>
          <Alert color="warning" severity="warning" action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                      setOpenB(false);
                      }}>}
                      
                      

                  </IconButton>}>
                  <div>{BellNotif}</div>
                    <Link to="/streaming">click here to get streaming video</Link>
          </Alert>
          </Collapse>
        </div>
        )}}
       class MVTNotification extends React.Component {
          render()
          {
            const BellNotif=this.props.dataFromParent
            return(
            <div className="MVTNotification">
            <Collapse in={openM}>
            <Alert color="warning" severity="warning" action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                        setOpenM(false);
                        }}>
                     
                    </IconButton>}>
                    <div>{BellNotif}</div>
                      <Link to="/streaming">click here to get streaming video</Link>
            </Alert>
            </Collapse>
          </div>
          )}};
  return (
    <div className="block_notifiaction">
    <div>
          <TemperatureNotification className='Notif'></TemperatureNotification>
          <GazNotification></GazNotification>
          <MVTNotification></MVTNotification>
          <BellNotification></BellNotification>
    </div>
    </div>
  );
}
