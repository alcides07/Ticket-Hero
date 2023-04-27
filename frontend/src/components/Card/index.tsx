import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ICard } from "../../types/IComponents";
import { useNavigate } from 'react-router-dom';

export interface ICustomCardProps {
  infos: ICard
}

function CustomCard(props: ICustomCardProps) {
  const navigate = useNavigate();
  function verificacaoDeLinks(id:string){
    if(props.infos.tipo_url == "comprar"){
      return navigate(`/evento/${id}/compra`)
    }else{
      return navigate(`/evento/${id}`)
    }
  }
  return (
    <Card onClick={() => verificacaoDeLinks(props.infos.id)}>
      <Card.Img variant="top" src={props.infos.pathImg} />
      <Card.Body>
        <Card.Title> {props.infos.title} </Card.Title>
        <Card.Text>
          <Row>
            <Col xs={12} md={8}> {props.infos.data} </Col>
            <Col><strong>R${props.infos.valorIngresso},00</strong></Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;