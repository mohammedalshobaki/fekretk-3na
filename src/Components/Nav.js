import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';

var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'https://www.joprogrammer.com/audio/audio.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
   
  function play(){ 
    audioElement.play();
    document.getElementsByClassName('play')[0].style.display = 'none';
    document.getElementsByClassName('pause')[0].style.display = 'block';

  } 
  function pause(){
    audioElement.pause();  
    document.getElementsByClassName('pause')[0].style.display = 'none';
    document.getElementsByClassName('play')[0].style.display = 'block';

  }
const Nav = () =>{
    return(
 
        <span className = "soundMusicButton">
          <span className= "play" onClick={play} ><i className = 'fa fa-play ' ></i></span>
          <span className= "pause" onClick={pause}><i className = 'fa fa-pause' ></i></span>


        </span>
        
    )
}
export default Nav;

