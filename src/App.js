import './App.css';
import findWaldoImage from './images/waldo1.jpg';
import MouseMenu from './components/mouseMenu';
import Header from './components/header';
import gameOne from './data/gameOne';
import { gameTimer } from './scripts/gameTimer';
import { useState } from 'react';

function App() {
  let currentMousePos;
  const [gameComplete, setGameComplete] = useState(false);

  function handleClick(e){
    currentMousePos = e;
    const menu = document.querySelector('.mouse-menu');
    menu.hasAttribute('style')?menu.removeAttribute('style'):menu.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px; display: block;`);
  }

  function mouseMenu(e){
    // console.log(currentMousePos);
    let foundAll = true;
    gameOne.forEach(character=>{
      if(e.target.textContent === character.character){
        if(!(currentMousePos.pageX<character.characterPos['x']-10 || currentMousePos.pageX>character.characterPos['x']+10 || currentMousePos.pageX===character.characterPos['x'])
        && !(currentMousePos.pageY<character.characterPos['y']-20 || currentMousePos.pageY>character.characterPos['y']+20 || currentMousePos.pageY===character.characterPos['y'])){
          character.found = true;
          document.querySelector(`.${character.character}`).setAttribute('style', 'opacity: 0.3;');
        }
      }
    })

    gameOne.forEach(character=>{
      if(character.found === false){
        foundAll = false;
      }
    })

    if(foundAll){
      setGameComplete(true);
      console.log(document.querySelector('.countdown').textContent);
    }
  }

  return (
    <div className="App">
      <Header gameStatus={gameComplete}/>
      <img src={findWaldoImage} alt='waldo' onClick={handleClick}/>
      <MouseMenu handleMenu={mouseMenu}/>
    </div>
  );
}

export default App;
