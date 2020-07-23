import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import contacts from '../contacts.json';

import Contacts from './Contacts';

const initialState = contacts.slice(0, 5);
console.log(initialState);

function Tables(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log('Component did Mount!');
  }, []);

  useEffect(() => {
    console.log('Component did update!');
  }, [state]);

  function handleAddClick() {
    const randomNumber = Math.floor(Math.random() * (contacts.length - 5) + 5);

    if (state.includes(contacts[randomNumber])) {
      return handleAddClick();
    }

    state.push(contacts[randomNumber]);

    return setState([...state]);
  }

  function handleSortClick(key) {
    state.sort((a, b) => {
      if (key === 'name') {
        return a[key].localeCompare(b[key]);
      }

      return a[key] - b[key];
    });

    console.log(state);

    return setState([...state]);
  }

  // function handleDeleteClick(id) {
  //   return setState([...state.filter((contact) => contact.id !== id)]);
  // }

  function handleDeleteClick(event) {
    const id = event.currentTarget.attributes[0].value;
    return setState([...state.filter((contact) => contact.id !== id)]);
  }

  return (
    <div>
      <Link to="/home">Homepage</Link>
      <div className="row">
        <div className="col-6">
          <Contacts
            state={state}
            handleAddClick={handleAddClick}
            handleSortClick={handleSortClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
        <div className="col-6">
          <Contacts
            state={state}
            handleAddClick={handleAddClick}
            handleSortClick={handleSortClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Tables;
