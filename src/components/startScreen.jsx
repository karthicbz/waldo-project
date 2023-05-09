const StartScreen = ()=>{
    const modes = ['Easy', 'Medium', 'Hard'];
    return(
        <div>
            <h1>Where's Waldo?</h1>
            <p>Please refer this <a href="https://waldo.fandom.com/wiki/Where%27s_Waldo%3F">link</a> for more info about the game.</p>
            <p>Choose a game</p>
            {modes.map(mode=>{
                return(
                    <div>
                        <img src="#" alt="dummy"/>
                        <p>{mode}</p>
                    </div>
                )
            })}
        </div>
    )
}