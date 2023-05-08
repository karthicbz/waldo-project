import { useEffect, useState } from "react";
import {gameTimer} from "../scripts/gameTimer";

const Countdown = ()=>{
    const [time, setTime] = useState(0);
    const [dummyTime, setDummyTime] = useState(0);

    useEffect(()=>{
        function setGameTime(){
            setTime(prevTime=>prevTime+1)
        }
        
        const gameTime = gameTimer(setGameTime);

        return ()=>{
            clearInterval(gameTime.myGameTimer);
        }
    }, [time])

    useEffect(()=>{
        function setDummyGameTime(){
            if(dummyTime>58){
                setDummyTime(0);
            }else{
                setDummyTime(prevDummyTime=>prevDummyTime+1);
            }
        }

        const dummyGameTime = gameTimer(setDummyGameTime);

        return ()=>{
            clearInterval(dummyGameTime.myGameTimer);
        }
    }, [dummyTime])

    return(
        <h1 className="countdown">{Math.floor(time/3600)+':'+Math.floor(time/60)+':'+(dummyTime>9?dummyTime:'0'+dummyTime)}</h1>
    )
}

export default Countdown;