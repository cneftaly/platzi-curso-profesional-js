import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new MediaPlayer({el:video, plugins: [
    new AutoPlay()
]});

// TODO: Agregar la funcionalidad del botón de mute/unmute
button.onclick = () => player.isPlaying() ? player.pause() : player.play();