import "../styles.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Card(){
    const navigate = useNavigate()
    const handleLinkedIn = () => {
        window.location.href = "http://www.linkedin.com";
    }
    /*const handleEmail = () => {
        navigate("/email")
    }*/
    return(
            <div className="card">
                <img className="ZackPic" src="../assets/ZackPic.PNG"></img>
                <h2 className="name">Zachary Andrews</h2>
                <h3 className="position">Frontend Developer</h3>
                <h4 className="website">zandrews.website</h4>
                <div className="buttons">
                    <button className="emailButton">
                        <span>
                            <MdEmail className="emailLogo"></MdEmail>
                            Email
                        </span>
                    </button>
                    <button className="socialButton" onClick={handleLinkedIn}>
                        <span>
                            <FaLinkedin className="linkedLogo"></FaLinkedin>
                            Linkedin
                        </span>
                    </button>
                </div>
                <h3 className="sectionHeader">About</h3>
                <h4 className="section">
                    I am a Computer Science graduate from the University of Kansas with experience working as a contractor at Capital One, 
                    using Python and in-house ML algorithms to create an API. I have additional experience with C/C++, JavaScript, SQL, and React. 
                    I am currently looking for full-time work. My hobbies include music, video games, and cycling.
                </h4>
                <h3 className="sectionHeader">Interests</h3>
                <h4 className="section">I am interested in animal welfare, environmentalism, housing issues and transportation issues.</h4>
                <div className="bottomSection">
                    <button className="bottomButtons">
                        <BsTwitterX />
                    </button>
                    <button className="bottomButtons">
                        <FaFacebookSquare/>
                    </button>
                    <button className="bottomButtons">
                        <FaInstagram/>
                    </button>
                    <button className="bottomButtons">
                        <FaGithubSquare/>
                    </button>
                </div>
            </div>
    )
}
