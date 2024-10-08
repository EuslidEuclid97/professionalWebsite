
import { useNavigate } from "react-router-dom"
//import {useRef} from "react";

export default function Navbar(){
    const navigate = useNavigate()
    function handleClickHome(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.currentTarget.blur()
        navigate('/')
    }
    function handleClickSoon(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.currentTarget.blur()
        navigate('/comingSoon')
    }
    function handleClickResume(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.currentTarget.blur()
        navigate('/resume')
    }
    function handleClickProjects(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.currentTarget.blur()
        navigate('/projects')
    }
    return(
        <nav>
            <h1>Zachary Andrews</h1>
            <div className="nav-list">
                <button className="nav-btn" onClick={(e) => {handleClickHome(e)}}>Home</button>
                <button className="nav-btn" onClick={(e) => {handleClickProjects(e)}}>Projects</button>
                <button className="nav-btn" onClick={(e) => {handleClickResume(e)}}>Resume</button>
                <button className="nav-btn" onClick={handleClickSoon}>Game</button>
            </div>
        </nav>
    )
}
