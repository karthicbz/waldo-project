import gameOne from "../data/gameOne";

const Characters = ({details})=>{
    return(
        <div className="characters">
            {details.map(character=>{
                return(
                    <img src={character.characterImg} alt="character to find" className={character.character}/>
                )
            })}
        </div>
    )
}

export default Characters;