import uxui from '../../img/uxui.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Fragment } from 'react';

function Cards() {
  return (
    <Fragment>
      <h1 className='trend'>
        Trending Courses!
      </h1>
      <Row xs={1} md={4} className="g-5">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ width: '25rem'}}>
            <Card.Img variant="top" src={uxui} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Fragment>
  );
}

export default Cards;