import '../../styles/Index.css';
import Footer from './Footer';
import Headshot from '../../assets/headshot.png'

export default function Home() {
    return (
        <div>
            <h1>
                Home
            </h1>
            <aside class="col-4 justify-content-start" id="aside">
                <h2 id="aboutMe">About Me</h2>
                <img src={Headshot} alt="headshot" />
                <p class="col">
                    Full-stack developer with a background in the medical field.
                    Experience in communication and group work to reach a common goal as well as leadership experience
                    and time-management.
                    Recently earned a certificate in full-stack development from George Washington University.
                    New experience in: <br />
                    Markup: CSS3, HTML5 <br />
                    Languages: JavaScript ES6+ <br />
                    Applications: GitHub, Heroku, MySQL, Robo 3T <br />
                    Tools: Node, Bootstrap, JQuery, Express, MongoDB, REACT <br />
                    Worked closely with team-members on group projects. Known as a hard worker.
                    I hope to leverage these skills to work as a part of a user driven team.

                </p>
            </aside>
            <Footer />
        </div>
    )
}