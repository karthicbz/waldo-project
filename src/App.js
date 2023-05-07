import './App.css';
import findWaldoImage from './images/waldo1.jpg';
import MouseMenu from './components/mouseMenu';

function App() {

  function handleClick(e){
    const menu = document.querySelector('.mouse-menu');
    menu.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px`);
  }

  function mouseMenu(e){
    alert(e.target.textContent);
  }

  return (
    <div className="App">
      <img src={findWaldoImage} alt='waldo' onClick={handleClick}/>
      <MouseMenu handleMenu={mouseMenu}/>
    </div>
  );
}

export default App;
