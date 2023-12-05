// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const redirectToCreate = () => {
    navigate('/create');
  };

  const redirectToRead = () => {
    navigate('/read');
  };

  return (
    <div>
      <button onClick={redirectToCreate} >Go to Create Page</button>
      <button onClick={redirectToRead}>Go to Read Page</button>
    </div>
  );
};

export default Home;
