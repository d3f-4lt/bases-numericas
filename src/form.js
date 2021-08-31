import React from 'react';
import { Card, Form, InputGroup } from 'react-bootstrap';
import './css/form.css';

const MeuForm = (props) => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>BIN</InputGroup.Text>
              <Form.Control type="number" placeholder="Binário" onChange={props.bin_f} value={props.bin} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>OCT</InputGroup.Text>
              <Form.Control type="number" placeholder="Octal" onChange={props.oct_f} value={props.oct} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>DEC</InputGroup.Text>
              <Form.Control type="number" placeholder="Decimal" onChange={props.dec_f} value={props.dec} />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <InputGroup>
              <InputGroup.Text>HEX</InputGroup.Text>
              <Form.Control type="number" placeholder="Hexadecimal" onChange={props.hex_f} value={props.hex} />
            </InputGroup>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MeuForm;