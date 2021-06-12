import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
export default function Notification() {
  const [openT, setOpenT ] = React.useState(true);
  const [openG, setOpenG ] = React.useState(true);
  const [openB, setOpenB ] = React.useState(true);
  const [openM, setOpenM ] = React.useState(true);

  const TemperatureNotification = () => {
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
                  <CloseIcon fontSize="warning" />
              </IconButton>}>
      contenue de notification de temperature !
      </Alert>
      </Collapse>
    </div>
    )};

    const GazNotification = () => {
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
                      <CloseIcon fontSize="warning" />
                  </IconButton>}>
          contenue de notification de Gaz !
          </Alert>
          </Collapse>
        </div>
      )};

      const BellNotification = () => {
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
                      }}>
                      <CloseIcon fontSize="warning" />
                  </IconButton>}>
                  <div>Bell alert</div>
                    <Link to="/streaming">click here to get streaming video</Link>
          </Alert>
          </Collapse>
        </div>
        )};
        const MVTNotification = () => {
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
                        <CloseIcon fontSize="warning" />
                    </IconButton>}>
                    <div>MVT alert</div>
                      <Link to="/streaming">click here to get streaming video</Link>
            </Alert>
            </Collapse>
          </div>
          )};
  return (
    <div className="block_notifiaction">
    <div>
          <TemperatureNotification></TemperatureNotification>
          <GazNotification></GazNotification>
          <MVTNotification></MVTNotification>
          <BellNotification></BellNotification>
    </div>
    </div>
  );
}
