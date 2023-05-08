import Countdown from "./countdown";
import Characters from "./characters";

const Header = ({gameStatus})=>{
    return(
        <div className="header">
            <Characters />
            <h1>Where's waldo</h1>
            <Countdown gameStatus={gameStatus}/>
        </div>
    )
}

export default Header;