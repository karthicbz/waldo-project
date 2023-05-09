import { Link } from "react-router-dom";
import app from '../scripts/firebaseInitializer';
import { getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection, updateDoc, doc, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const GameOverScreen = ({time, params})=>{
    // console.log(params);
    const [scores, setScores] = useState([]);
    const currentGame = Object.values(params)[0];

    async function getScoreData(){
        let tempScores = []
        const db = getFirestore(app);
        const snapshot = await getDocs(collection(db, "score"));
        snapshot.forEach(snap=>{
            tempScores = [...tempScores, {id:snap.id, data:snap.data()}];
        });
        tempScores.forEach(score=>{
            if(score.id === 'gameone'){
                setScores(score.data);
            }
        })
    }

    useEffect(()=>{
        getScoreData();
        console.log(scores);
    }, [])

    async function addScoreData(name, time){
        const db = getFirestore(app);
        const docRef = doc(db, "score", currentGame);
        try{
            // const docRef = await addDoc(collection(db, "score"), {
            //     name: name,
            //     time: time,
            // });
            await updateDoc(docRef, {
                score: [{name: name,
                time: time,}]
            })
        }catch(e){
            console.log('error adding data', e);
        }
    }



    function saveData(){
        const playerName = document.querySelector('.player-name-input');
        addScoreData(playerName.value, time);
    }

    return(
        <div className="game-over-screen">
            <p>You completed the game in {time}</p>
            <input type="text" placeholder="Your name.." className="player-name-input"/>
            <button onClick={saveData}>Save</button>
            <Link to={"/"}><button>Home</button></Link>
        </div>
    )
}

export default GameOverScreen;