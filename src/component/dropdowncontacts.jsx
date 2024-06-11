import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic">
        phone number
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">kishan</Dropdown.Item>
        <Dropdown.Item href="#/action-2">dhananjay</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;