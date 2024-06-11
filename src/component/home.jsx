import React from 'react';
import ControlledCarousel from './crousel';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Our School</h1>
        <p>Enroll in our school:</p>
        <ul>
          <li><a href="/teacher">Teacher</a></li>
          <li><a href="/student">Student</a></li>
          <li><a href="/parent">Parent</a></li>
          <li><a href="/principal">Principal</a></li>
        </ul>
        <div className='sm' style={{width:"40%",height:"20rem",margin:'auto'}}>
        <ControlledCarousel/>
        </div>
      </div>
    );
  }
}

export default HomePage;
