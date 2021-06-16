import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import http from './http-common'

function Controls(props) {

    const sendData = (e) => {
        e.preventDefault();
        http.post('music/',props.isPlaying ? -1 : props.currentSongIndex)
        .then(res => {
          if (res.status === 200) {
            console.log('song index sent succesfully')
          } else { 
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.log('error and data are ',props.currentSongIndex)
          console.error(err);
          
        });
     
    props.setIsPlaying(!props.isPlaying)
    }
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" style={{backgroundColor:"#1CADD4"}} onClick={(e) => sendData(e)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} style={{margin:"auto"}} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls
