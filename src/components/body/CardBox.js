import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBox(props) {
  let {name , desc, imgUrl,id} = props;
  return (
    <Card className="m-0 flex w-25 flex-column justify-content-center" id={id}>
      <Card.Img variant="top" src={imgUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {
            desc
          }
        </Card.Text>
        <div>
          <Button variant="primary">Edit</Button>
          <Button variant="primary">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBox;