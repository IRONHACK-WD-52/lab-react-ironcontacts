import React from 'react';

function Homepage(props) {
  return (
    <div>
      {props.lang === 'en' ? (
        <h1>Welcome to the Homepage!</h1>
      ) : (
        <h1>Bem-vindo a pagina principal!</h1>
      )}
    </div>
  );
}

export default Homepage;
