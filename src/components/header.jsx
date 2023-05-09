import Countdown from "./countdown";
import Characters from "./characters";

const Header = ({gameStatus, details})=>{
    return(
        <div className="header">
            <Characters details={details}/>
            <h1>Where's waldo</h1>
            <Countdown gameStatus={gameStatus}/>
        </div>
    )
}

export default Header;