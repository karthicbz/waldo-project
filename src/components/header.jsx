import Countdown from "./countdown";
import Characters from "./characters";

const Header = ()=>{
    return(
        <div className="header">
            <Characters />
            <h1>Where's waldo</h1>
            <Countdown />
        </div>
    )
}

export default Header;