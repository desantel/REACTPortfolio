import '../../styles/Index.css';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';


const styles = {
    contactStyles: {
        background: 'rgb(249, 236, 204)',
    },
};

export default function Contact() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Contact Information</h2>
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
                    <Col>
                        <h2>Contact Form</h2>
                        <form id='contact-form'>
                            <input type='text' name='user_name' placeholder='Name' />
                            <br />
                            <input type='email' name='user_email' placeholder='Email' />
                            <br />
                            <textarea name='message' placeholder='Message' />
                            <br />
                            <input type='submit' value='Send' />
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
