import "../styles.css"
import { FcGlobe } from "react-icons/fc";
export default function Main(){
    return(
        <div className="mainPage">
            <div className="hello_world">
                <h1>
                    Hello world!
                    <FcGlobe className="globe"/>
                </h1>
                <h1>My name is Zachary Andrews, and I am a recent computer science graduate based in the US!</h1>
            </div>
            <div className="about">
                <img src="../../dist/assets/ZackPic.JPG" className="ZackPic"></img>
                <h1>About Me</h1>
                <h4>
                    I am a Computer Science graduate from the University of Kansas with experience working as a contractor at Capital One, 
                    using Python and in-house ML algorithms to create an API. I have additional experience with C/C++, JavaScript, SQL, AWS, and React 
                    (which this website is written in). I am currently looking for full-time work. My hobbies include music, video games, and cycling!
                    This is a test for GitHub Actions.
                </h4>
            </div>
        </div>
    )
}
