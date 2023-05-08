import gameOne from "../data/gameOne";

const MouseMenu = ({handleMenu})=>{
    return(
        <div className="mouse-menu" onClick={handleMenu}>
            {gameOne.map(character=>{
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