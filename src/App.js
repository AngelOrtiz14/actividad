import logo from './logo.svg';
import './App.scss';
import Item from './componentes/item/item';
import Formulario from './componentes/item/formulario/formulario';
import Menu from './componentes/item/menu/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
        <Menu></Menu>

        <Container>
      <Row>
        <Col><Formulario></Formulario></Col>
        <Col>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        </Col>
      </Row>

    </Container>

    

    </div>
  );
}

export default App;