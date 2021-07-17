import '../../styles/Index.css';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <h1>
          Project Page
        </h1>
      </Row>
      <Row>
        <Col id='weather'>
          <a href="https://github.com/desantel/week6weather" target="_blank">Github Repo</a>
          <br />
          <a href="https://desantel.github.io/week6weather/" target="_blank">Deployed Application</a>
        </Col>
        <Col id='hike'>
          <a href="https://github.com/spfave/hike-tracker" target="_blank">Github Repo</a>
          <br />
          <a href="https://gwu-hiker-tracker.herokuapp.com/" target="_blank">Deployed Application</a>
        </Col>
        <Col id='news'>
          <a href="https://github.com/desantel/purplenews" target="_blank">Github Repo</a>
          <br />
          <a href="https://desantel.github.io/purplenews/thefinalhomepage.html" target="_blank">Deployed
            Application</a>
        </Col>
      </Row>
      <Footer />
    </Container >
  )
}
