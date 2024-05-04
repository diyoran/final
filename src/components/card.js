// import posterCard from '../img/posterCard.webp'
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { Fragment } from 'react';
// import Button from 'react-bootstrap/Button';

//  function OutlineTypesExample() {
//   return (
//     <>
//       <Button className='card__button' size="lg" variant="outline-info">All</Button>{''}
//       <Button className='card__button' size="lg" variant="outline-info">Art & Design</Button>{''}
//       <Button className='card__button' size="lg" variant="outline-info">Development</Button>{''}
//       <Button className='card__button' size="lg" variant="outline-info">Business</Button>{''}
//       <Button className='card__button' size="lg" variant="outline-info">Marketing</Button>{''}
//     </>
//   );
// }

// function Cards() {
//   return (
//     <Fragment>
      
//       <div className='card__buttons'>
//       <OutlineTypesExample />
//       </div>


//       <Row xs={1} md={3} className="g-5">
//         {Array.from({ length: 6 }).map((_, idx) => (
//           <Col key={idx}>
//             <Card style={{ width: '25rem' }}>
//               <Card.Img variant="top" src={posterCard} />
//               <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                   This is a longer card with supporting text below as a natural
//                   lead-in to additional content. This content is a little bit
//                   longer.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Fragment>
//   );
// }

// export default Cards;