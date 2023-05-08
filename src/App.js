import './App.css';
import findWaldoImage from './images/waldo1.jpg';
import MouseMenu from './components/mouseMenu';
import Header from './components/header';

function App() {

  function handleClick(e){
    const menu = document.querySelector('.mouse-menu');
    menu.hasAttribute('style')?menu.removeAttribute('style'):menu.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px; display: block;`);
  }

  function mouseMenu(e){
    alert(e.target.textContent);
  }

  return (
    <div className="App">
      <Header />
      <img src={findWaldoImage} alt='waldo' onClick={handleClick}/>
      <MouseMenu handleMenu={mouseMenu}/>
    </div>
  );
}

export default App;
