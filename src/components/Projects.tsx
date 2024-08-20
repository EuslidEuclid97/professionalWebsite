import '../styles.css'
export default function Projects(){
    return(
        <div className='resume'>
            <h1 className="employer">Projects and Certifications</h1>
            <h2>1. KU Hackathon project (ELI_), frontend in React and CSS, backend MongoDB. Git repo <a href = 'https://github.com/tuckspaint/HACKKU23.git'>here</a>
            .</h2>
            <h2>2. Hands-on experience working with team members programming a virtual game of chess 
                via HTML, CSS and JavaScript; created some UI features and the algorithms for check and checkmate. Git repo <a href= 'https://github.com/EuslidEuclid97/eecs448-project4-ChessGame.git'>here</a>
            .</h2>
            <h2>3. This website, built in React/TypeScript and hosted on an EC2 server with Nginx proxy! 
                Basic CI/CD implemented with GitHub Actions: <a href='https://github.com/EuslidEuclid97/professionalWebsite.git'>Repo here</a>
            </h2>
        </div>
    ) 
}