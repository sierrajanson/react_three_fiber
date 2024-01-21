import {Outlet,Link} from "react-router-dom";
import { startTransition } from "react";
const Landing = () => {
    // if you reach numbers that are special --> egg

    return (
        <div className="container">
            <div className="sankie_surfs">
                <Link to="/dog" className="play_link">Click to play</Link>
                <Outlet />
            </div>
        </div>
        
    )
}
export default Landing;
