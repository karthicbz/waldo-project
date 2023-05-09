import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from "./startScreen";
import App from "../App";

const RouteSwitch = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/:gameone" element={<App />}/>
                <Route path="/:gametwo" element={<App />}/>
                <Route path="/:gamethree" element={<App />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;