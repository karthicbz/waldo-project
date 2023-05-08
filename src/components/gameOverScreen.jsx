const GameOverScreen = ({time})=>{

    return(
        <div className="game-over-screen">
            <p>You completed the game in {time}</p>
            <button>Replay</button>
        </div>
    )
}

export default GameOverScreen;