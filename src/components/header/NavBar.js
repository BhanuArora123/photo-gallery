import Nav from 'react-bootstrap/Nav';

const NavBar = (props) => {
  return (
    <Nav defaultActiveKey="/" as="ul" className='bg-primary text-white'>
      <Nav.Item as="li">
        <Nav.Link className='text-white' href="/">My Gallery</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='text-white' eventKey="link-1">Add Picture</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='text-white' eventKey="link-2">View Pictures</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;