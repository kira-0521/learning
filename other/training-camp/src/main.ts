import './style.css'
import { playMusic, stopMusic } from './lib/audio'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>audio hello world!</h1>
    <h2>Music Play Ground!</h2>
    <div>
      <h3>Play Music!!</h3>
      <button id='play'> > </button>
      </div>
    <div>
      <h3>Stop!!</h3>
      <button id='stop'> x </button>
    </div>
  </div>
`

playMusic(document.querySelector<HTMLButtonElement>('#play')!)
stopMusic(document.querySelector<HTMLButtonElement>('#stop')!)