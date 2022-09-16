import {useState, useEffect } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"


export default function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri] 

    )
  
  if (!accessToken) return null
    return (
        
        <SpotifyPlayer
        styles={{bgColor: '#f1f1f1', activeColor: '#49e12e', color: 'grey', sliderHandleColor: 'black', sliderColor: '#49e12e', trackNameColor:'black', trackArtistColor:'grey', sliderTrackColor:'grey'}}
        token={accessToken} 
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />

    )
    
}
