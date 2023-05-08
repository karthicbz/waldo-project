import gameOne from "../data/gameOne";

const Characters = ()=>{
    return(
        <div className="characters">
            {gameOne.map(character=>{
                return(
                    <img src={character.characterImg} alt="character to find"/>
                )
            })}
        </div>
    )
}

export default Characters;