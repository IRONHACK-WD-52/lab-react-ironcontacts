import React, { useEffect } from 'react';

function TableRow(props) {
  useEffect(() => {
    console.log('TableRow component is mounted!');
  }, []);

  useEffect(() => {
    return function unmount() {
      console.log('Component did Unmount!');
    };
  });

  return (
    <tr key={props.contact.id}>
      <td>
        <img
          className="contact-picture"
          src={props.contact.pictureUrl}
          alt="The actor"
        />
      </td>
      <td className="align-middle">{props.contact.name}</td>
      <td className="align-middle">{props.contact.popularity.toFixed(2)}</td>
      <td className="align-middle">
        <button
          dataid={props.contact.id}
          type="button"
          onClick={props.deleteHandler}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
