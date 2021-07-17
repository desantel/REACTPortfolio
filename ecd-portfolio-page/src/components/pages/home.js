import '../../styles/Index.css';
import Footer from './Footer';
import Headshot from '../../assets/headshot.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const styles = {
        homeStyle: {
      background: 'rgb(249, 236, 204)',
    },
  };

export default function Home() {
    return (
        <Container fluid>
            <Row id="aside">
                <h2 id="aboutMe">About Me</h2>
                <Col ><Image src={Headshot} alt="headshot" rounded fluid/></Col>
                <Col> <p>
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
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}