import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const IdError = () => {
  return (
    <div>
        <div>
            <h1>The ID you entered does not exist!!!</h1>
            <Link to='/author/addnew' className="btn btn-primary mx-3">Click here to add Author</Link>
            </div>

    </div>




  )
};

export default IdError;
