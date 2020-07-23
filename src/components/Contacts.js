import React, { useEffect } from 'react';
import TableRow from './TableRow';

function Contacts(props) {
  useEffect(() => console.log('Props updated!'), [props]);

  return (
    <div className="container-fluid pt-5">
      <div className="vh-100 d-flex justify-content-center">
        <div className="w-100">
          <div className="w-100 d-flex justify-content-between mb-4">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={props.handleAddClick}
            >
              Add Random Contact
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => props.handleSortClick('name')}
            >
              Sort by name
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => props.handleSortClick('popularity')}
            >
              Sort by popularity
            </button>
          </div>

          <table className="table">
            <thead className=" thead-dark">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.state.map((contact) => {
                return (
                  <TableRow
                    key={contact.id}
                    contact={contact}
                    deleteHandler={props.handleDeleteClick}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
