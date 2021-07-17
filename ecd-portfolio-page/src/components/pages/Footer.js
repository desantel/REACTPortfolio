import '../../styles/Index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const styles = {
  sectionStyles: {
    background: 'rgb(249, 236, 204)',
  },
};

function Section() {
  return (
    <Container>
      <Row>
        <Col justify-content-end></Col>
      </Row>
    </Container>
  );
}

export default Section;
