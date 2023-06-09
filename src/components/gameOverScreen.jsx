import { Link } from "react-router-dom";
import app from '../scripts/firebaseInitializer';
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const GameOverScreen = ({time, params})=>{
    // console.log(params);
    const [scores, setScores] = useState(undefined);
    const currentGame = Object.values(params)[0];

    async function getScoreData(){
        let tempScores = []
        const db = getFirestore(app);
        const snapshot = await getDocs(collection(db, "score"));
        snapshot.forEach(snap=>{
            tempScores = [...tempScores, {id:snap.id, data:snap.data()}];
        });
        tempScores.forEach(score=>{
            if(score.id === currentGame){
                setScores(score.data.score);
            }
        })
    }

    async function addScoreData(){
        const db = getFirestore(app);
        const docRef = doc(db, "score", currentGame);
        try{
            await updateDoc(docRef, {
                score: scores,
            })
        }catch(e){
            console.log('error adding data', e);
        }
    }

    function saveData(e){
        const playerName = document.querySelector('.player-name-input');
        if(playerName.value !== ''){
            if(scores !== undefined){
                setScores([...scores, {name:playerName.value, time:time}]);
            }else{
                setScores([{name:playerName.value, time:time}]);
            }
            e.target.textContent = 'Saved';
            e.target.disabled = true;
            e.target.setAttribute('style', 'background-color: transparent; border:none; color: black');
        }else{
            alert('You name should not be empty');
        }
    }

    useEffect(()=>{
        getScoreData();
        console.log(scores);
    }, [])

    useEffect(()=>{
        if(scores !== undefined){
            addScoreData();
        }
    }, [scores])

    return(
        <div className="game-over-screen">
            <p>You completed the game in {time}</p>
            <input type="text" placeholder="Your name.." className="player-name-input"/>
            <button onClick={saveData} className="save-score">Save</button>
            <Link to={"/"}><button className="gameover-to-home">Home</button></Link>
        </div>
    )
}

export default GameOverScreen;