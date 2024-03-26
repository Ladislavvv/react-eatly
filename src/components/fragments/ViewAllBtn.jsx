import React from 'react';
import { Link } from 'react-router-dom';

function ViewAllBtn() {

  return (
    <div className="view-link-wrapper">
      <Link className="view-link" to='/alldishes'>
        View All
      </Link>
    </div>
  );
}

export default ViewAllBtn;
