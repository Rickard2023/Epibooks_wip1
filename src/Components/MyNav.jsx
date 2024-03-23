import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBCol } from "mdbreact";
import { Context } from '../Context/ContextProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import "C:\\Epicode\\NPX\\epibooks\\src\\Components\\MyNav.css"



export default function MyNav() {

  const {ticks, setTicks} = useContext(Context);
  function toggleTick(s, category)
  {
    setTicks(prevState => {
      let newTicks = [...prevState];
      newTicks[s] =  newTicks[s] === category ? '' : category;
      console.log(newTicks);
      return newTicks;
    }) 
  }


  return (
    <Navbar expand="lg" bg="dark" variant="light">
    <Container>    
      <Navbar.Brand href="#home" className='text-danger'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
          <Nav.Link href="#link"className='text-white' >About</Nav.Link>
          <NavDropdown title="Browse" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>      
          </NavDropdown>   
        </Nav>
      </Navbar.Collapse>
      <MDBCol md="3" className="navSearch" >
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </MDBCol>
      <Form> 
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 text-light navTicks">
          <Form.Check 
            inline
            label="fantasy"
            type={type}
            id={`inline-${type}-0`}
            onClick={()=> {
              toggleTick(0, "fantasy")
            }}
          />
          <Form.Check
            inline
            label="history"
            type={type}
            id={`inline-${type}-1`}
            onClick={()=> {
              toggleTick(1, "history")
            }}
          />
          <Form.Check
            inline
          //  disabled
            label="horror"
            type={type}
            id={`inline-${type}-2`}
            onClick={()=> {
              toggleTick(2, "horror")
            }}
          />
          <Form.Check
            inline
          //  disabled

            label="romance"
            type={type}
            id={`inline-${type}-3`}
            onClick={()=> {
              toggleTick(3, "romance")
            }}
          />
           <Form.Check
            inline
          //  disabled
            label="sci-fi"
            type={type}
            id={`inline-${type}-4`}
            onClick={()=> {
              toggleTick(4, "sci-fi")
            }}
          />
        </div>
      ))}
      </Form>
    </Container>
  </Navbar>

  )
}
