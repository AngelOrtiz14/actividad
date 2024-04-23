import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="password" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="password" placeholder="Date" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;