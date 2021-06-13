import {useState, useEffect} from 'react';
import Player from './Player';

function MusicPlayer() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      length: 4, 
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music1/on-n-on.mp3"
    },
    {
      title: "Hobba",
      length: 4, 
      artist: "Rubby",
      img_src: "./images/Hobba.jpg",
      src: "./music1/Ruby - Hetta Tanya [ Official Lyrics Video] _ روبي - حته تانيه[Mpgun.com].mp3"
    },
    {
      title: "Song 3",
      length: 4, 
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music1/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      length: 4, 
      img_src: "./images/song-4.jpg",
      src: "./music1/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
  

  );
}

export default MusicPlayer;