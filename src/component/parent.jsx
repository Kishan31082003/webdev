import React from 'react';
import { Link } from 'react-router-dom';

function ParentPage() {
  return (
    <div>
      <h2>Parent Page</h2>
      <p>Are you a parent of a:</p>
      <ul>
        <li><Link to="/parent/boy">Boy</Link></li>
        <li><Link to="/parent/girl">Girl</Link></li>
      </ul>
    </div>
  );
}

export default ParentPage;
