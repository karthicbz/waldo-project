const MouseMenu = ({handleMenu, gameDetails})=>{
    return(
        <div className="mouse-menu" onClick={handleMenu}>
            {gameDetails.map(character=>{
                return(
                    <div>
                        <img src={character.characterImg} alt="character"/>
                        <p>{character.character}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MouseMenu;