import React from 'react';
import { Button } from 'react-bootstrap';

class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      qualification: '',
      // Add more fields as needed
    };
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form submitted:', this.state);
    
    // You can send the form data to an API, dispatch an action, etc.
  }

  render() {
    return (
      <div>
        <h2>Teacher Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={this.state.qualification}
              onChange={this.handleChange}
            />
          </div>
          {/* Add more fields here */}
          <Button variant="success" type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default TeacherForm;
