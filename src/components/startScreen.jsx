import '../App.css';
import { Link } from 'react-router-dom';

const StartScreen = ()=>{
    const modes = [{mode: 'Easy', link:'gameone'}, {mode:'Medium', link:'gametwo'}, {mode:'Hard', link:'gamethree'}];
    return(
        <div>
            <h1>Where's Waldo?</h1>
            <p>Please refer this <a href="https://waldo.fandom.com/wiki/Where%27s_Waldo%3F" target="_blank" rel="noopener noreferrer">link</a> for more info about the game.</p>
            <p>Choose a game</p>
            <div className="game-modes">
                {modes.map(mode=>{
                    return(
                        <Link to={`/${mode.link}`}><div className={mode.mode} key={mode.link}>
                            <img src="#" alt="dummy"/>
                            <p>{mode.mode}</p>
                        </div></Link>
                    )
                })}
            </div>
            <div>
                <p>Want to to where you are</p>
                <Link to={"/leaderboard"}><button>View Leaderboard</button></Link>
            </div>
        </div>
    )
}

export default StartScreen;