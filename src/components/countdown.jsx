import { useEffect, useState } from "react";

const Countdown = ()=>{
    const [time, setTime] = useState(0);
    const [dummyTime, setDummyTime] = useState(0);

    useEffect(()=>{
        const myTimer = setInterval(()=>{
            setTime(prevTime=>prevTime+1);
        }, 1000);
        
        return ()=>{
            clearInterval(myTimer);
        }
    }, [time])

    useEffect(()=>{
        const myDummyTimer = setInterval(()=>{
            if(dummyTime>58){
                setDummyTime(0);
            }else{
                setDummyTime(prevDummyTime=>prevDummyTime+1);
            }
        }, 1000);

        return ()=>{
            clearInterval(myDummyTimer);
        }
    }, [dummyTime])

    return(
        <h1>{Math.floor(time/3600)+':'+Math.floor(time/60)+':'+dummyTime}</h1>
    )
}

export default Countdown;