const gameTimer = (func)=>{
    const myGameTimer = setInterval(()=>{
        func();
    }, 1000);

    const clearGameTimer = ()=>{
        clearInterval(myGameTimer);
    }

    return {myGameTimer, clearGameTimer};
}

export {gameTimer}