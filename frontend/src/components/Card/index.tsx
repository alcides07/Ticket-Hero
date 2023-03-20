import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ICard } from "../../types/IComponents";

export interface ICustomCardProps {
  infos: ICard
}

function CustomCard(props: ICustomCardProps) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.infos.pathImg} />
      <Card.Body>
        <Card.Title> {props.infos.title} </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={8}> 20/03/2023 - 20:00 </Col>
            <Col><strong>R$ 100,00</strong></Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;