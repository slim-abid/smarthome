
import React from 'react'
import ReactPlayer from 'react-player'
import {Container} from 'reactstrap';

function Streaming() {
  return (
    <Container>
    <div className="App">
      <ReactPlayer 
          // This is the video address passed from the superior page
          url='http://localhost:3001/index.m3u8'
          playing={true} 
          loop={true}
          width='80%'
          height='80%'
          controls={true}
          config={{
            file: {
              forceHLS: true,
            }
          }}
  />
    </div>
    </Container>
  );
}

export default Streaming;