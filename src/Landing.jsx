import {Outlet,Link} from "react-router-dom";
const Landing = () => {
    return (
        <div className="container">
            <div className="sankie_surfs">
                <Link to="/bear" className="play_link">Click to play</Link>
                <Outlet />
            </div>
        </div>
        
    )
}
export default Landing;
