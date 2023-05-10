import './App.css';
import MouseMenu from './components/mouseMenu';
import Header from './components/header';
import { useEffect, useState } from 'react';
import GameOverScreen from './components/gameOverScreen';
import app from './scripts/firebaseInitializer';
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import getCurrentImage from './data/currentImage';

function App() {
  let currentMousePos;
  const [gameComplete, setGameComplete] = useState(false);
  const [completeTime, setCompleteTime] = useState(0);
  const [gameDetails, setGameDetails] = useState([]);

  const params = useParams();
  let currentGameImage = getCurrentImage(Object.values(params)[0]);
  // console.log(currentGameImage);
  
  async function getFirebaseData(){
    let tempGameDetails = [];
    const db = getFirestore(app);
    const snapshot = await getDocs(collection(db, `${Object.values(params)[0]}`));
    snapshot.forEach(doc=>{
      tempGameDetails = [...tempGameDetails, {character: doc.id, characterPos: {x:doc.data()['x'], y:doc.data()['y']}, 
      found:doc.data()['found'], characterImg:doc.data()['characterImg']}];
    });
    // console.log(tempCharPosition);
    setGameDetails(tempGameDetails);
  }

  useEffect(()=>{
    getFirebaseData();
    // console.log(gameDetails);
  }, [])

  function handleClick(e){
    // console.log(e.pageX, e.pageY);
    currentMousePos = e;
    const menu = document.querySelector('.mouse-menu');
    if(gameComplete !==true){
      menu.hasAttribute('style')?menu.removeAttribute('style'):menu.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px; display: block;`);
    }else{
      menu.removeAttribute('style');
    }
  }

  function mouseMenu(e){
    let foundAll = true;
    gameDetails.forEach(character=>{
      if(e.target.textContent === character.character){
        if(!(currentMousePos.pageX<character.characterPos['x']-10 || currentMousePos.pageX>character.characterPos['x']+10 || currentMousePos.pageX===character.characterPos['x'])
        && !(currentMousePos.pageY<character.characterPos['y']-20 || currentMousePos.pageY>character.characterPos['y']+20 || currentMousePos.pageY===character.characterPos['y'])){
          character.found = true;
          document.querySelector(`.${character.character}`).setAttribute('style', 'opacity: 0.3;');
        }
      }
    })

    gameDetails.forEach(character=>{
      if(character.found === false){
        foundAll = false;
      }
    })

    if(foundAll){
      setGameComplete(true);
      // console.log(document.querySelector('.countdown').textContent);
      setCompleteTime(document.querySelector('.countdown').textContent);
      document.querySelector('.game-over-screen').setAttribute('style', 'display:flex;');
    }
  }

  return (
    <div className="App">
      <Header gameStatus={gameComplete} details={gameDetails}/>
      <img src={currentGameImage} alt='waldo' onClick={handleClick} className='game-screen'/>
      <MouseMenu handleMenu={mouseMenu} gameDetails={gameDetails}/>
      <GameOverScreen time={completeTime} params={params}/>
    </div>
  );
}

export default App;
