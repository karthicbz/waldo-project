import { useState } from "react";
import { Link } from "react-router-dom";
import app from "../scripts/firebaseInitializer";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const LeaderBoard = ()=>{
    const [scores, setScores] = useState([]);

    async function getScoreData(e){
        let tempScores = [];
        const db = getFirestore(app);
        const snapshot = await getDocs(collection(db, "score"));
        snapshot.forEach(snap=>{
            tempScores = [...tempScores, {id:snap.id, data:snap.data()}];
        });
        tempScores.forEach(score=>{
            if(score.id === e.target.id){
                setScores(score.data.score);
            }
        })
    }

    function handleClick(e){
        // const playerScores = document.querySelector('.player-scores');
        setScores([]);
        getScoreData(e);
    }

    return(
        <div className="leader-board">
            <div className="lead-to-home"><Link to={"/"}><button>Home</button></Link></div>
            <h1 className="leaderboard-heading">Welcome to leaderboard</h1>
            <div className="leaderboard-menu">
                <button id="gameone" onClick={handleClick}>Gameone Scores</button>
                <button id="gametwo" onClick={handleClick}>Gametwo Scores</button>
                <button id="gamethree" onClick={handleClick}>Gamethree Scores</button>
            </div>
            <div className="player-scores">
            {scores !== undefined?scores.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)).map(score=>{
                return(
                    <div className="score-row" key={score.name+score.time}>
                        <p>{score.name}</p>
                        <p>{score.time}</p>
                    </div>
                )
            }):<div className="score-row"><p>No scores yet!</p></div>}
            </div>
        </div>
    );
}

export default LeaderBoard;