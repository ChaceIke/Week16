import React from 'react';

const Unicorn = ({ unicorn, onDelete }) => {

  // This component is a form to add a unicorn and it's information to the database.
  // It takes its Name, its age, as well as its colour.
  const updateForm = (unicorn) => {
    return (
      <form>
        <div class="form-group row">
          <label for="unicorn-name" class="col-sm-2 col-form-label">Unicorn Name</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="unicorn-name" value="Unicorn Name"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="unicorn-age" class="col-sm-2 col-form-label">Unicorn Age</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="unicorn-age" placeholder="Unicorn Age"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="unicorn-colour" class="col-sm-2 col-form-label">Unicorn Colour</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="unicorn-colour" placeholder="Unicorn Colour"></input>
          </div>
        </div>
      </form>
    )
  }

  // For each table row I return the jsx below.
  // It contains the unicorn's id, name, age, and colour.
  // It also contains two buttons for deleting and updating unicorn information.
  return (
    <tr>
      <th scope="row">{unicorn.id}</th>
      <td>{unicorn.name}</td>
      <td>{unicorn.age}</td>
      <td>{unicorn.colour}</td>
      <td><button className='btn btn-danger' onClick={() => onDelete(unicorn)}>Delete</button></td>
      <td><button className='btn btn-warning' onClick={() => updateForm(unicorn)}>Update Unicorn</button></td>
    </tr>
    )
}

export default Unicorn;