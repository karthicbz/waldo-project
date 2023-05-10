import '../App.css';
import { Link } from 'react-router-dom';
import gameOneScreen from "../images/waldo1.jpg";
import gameTwoScreen from "../images/waldo2.jpeg";
import gameThreeScreen from "../images/waldo3.jpeg";

const StartScreen = ()=>{
    const modes = [{mode: 'Easy', link:'gameone', image:gameOneScreen}, {mode:'Medium', link:'gametwo', image:gameTwoScreen}, {mode:'Hard', link:'gamethree', image:gameThreeScreen}];
    return(
        <div className='start-page'>
            <div>
                <h1 className='startpage-heading'>Where's Waldo?</h1>
            </div>
            <div>
                <p className='startpage-refer-link'>Please refer this <a href="https://waldo.fandom.com/wiki/Where%27s_Waldo%3F" target="_blank" rel="noopener noreferrer">link</a> for more info about the game.</p>
            </div>
            <div>
                <h2 className='startpage-gamechooser'>Choose a game</h2>
            </div>
            <div className="game-modes">
                {modes.map(mode=>{
                    return(
                        <Link to={`/${mode.link}`}><div className={mode.mode} key={mode.link}>
                            <img src={mode.image} alt="dummy"/>
                            <p>{mode.mode}</p>
                        </div></Link>
                    )
                })}
            </div>
            <div className='start-to-lead'>
                <p>Want to to where you are</p>
                <Link to={"/leaderboard"}><button>View Leaderboard</button></Link>
            </div>
        </div>
    )
}

export default StartScreen;