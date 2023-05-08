import { useEffect, useState } from "react";
import {gameTimer} from "../scripts/gameTimer";

const Countdown = ({gameStatus})=>{
    const [time, setTime] = useState(0);
    const [dummyTime, setDummyTime] = useState(0);

    function setGameTime(){
        setTime(prevTime=>prevTime+1)
    }

    useEffect(()=>{
        const {myGameTimer, clearGameTimer} = gameTimer(setGameTime);

        if(gameStatus){
            clearGameTimer();
        }

        return ()=>{
            clearInterval(myGameTimer);
        }
    }, [time])

    function setDummyGameTime(){
        if(dummyTime>58){
            setDummyTime(0);
        }else{
            setDummyTime(prevDummyTime=>prevDummyTime+1);
        }
    }

    useEffect(()=>{
        const {myGameTimer, clearGameTimer} = gameTimer(setDummyGameTime);

        if(gameStatus){
            clearGameTimer();
        }

        return ()=>{
            clearInterval(myGameTimer);
        }
    }, [dummyTime])

    return(
        <h1 className="countdown">{Math.floor(time/3600)+':'+Math.floor(time/60)+':'+(dummyTime>9?dummyTime:'0'+dummyTime)}</h1>
    )
}

export default Countdown;