import { HashRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./startScreen";
import App from "../App";
import LeaderBoard from "./leaderBoard";

const RouteSwitch = ()=>{
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/:gameone" element={<App />}/>
                <Route path="/:gametwo" element={<App />}/>
                <Route path="/:gamethree" element={<App />}/>
                <Route path="/leaderboard" element={<LeaderBoard />}/>
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;