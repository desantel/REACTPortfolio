import '../../styles/Index.css';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const styles = {
    contactStyles: {
        background: 'rgb(249, 236, 204)',
    },
};

export default function Contact() {
    return (
        <div style={styles.contactStyles}>
            <h2 id="contact">Contact Information</h2>
            <Container style={styles.contactStyles}>
                <Row>
                    <Col>
                        <ul class="contact-list">
                            <li class="" id="">Telephone: ###-###-####</li>
                            <li class="" id="">Email: elizabeth.desantis90@gmail.com</li>
                            <li class="" id=""><a href="https://github.com/desantel"
                                target="_blank">Github</a></li>
                            <li class="" id=""><a
                                href="https://www.linkedin.com/in/elizabeth-desantis-55941399/"
                                target="_blank">LinkedIn</a></li>
                            <li class="" id=""><a href="../assets/Elizabeth De Santis Resume.pdf"
                                target="_blank" download>Resume</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
