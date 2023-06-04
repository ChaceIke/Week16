import React, { useState } from 'react';

// This component takes the onSubmit prop which is a function to create a unicorn.
const AddUnicorn = ({ onSubmit }) => {

  // Next I create 3 different states to keep track of.
  // I initially set them to blank string values.
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [colour, setColour] = useState('');

  // The handlesubmit button runs when the form is submitted.
  // It prevents the page from reloading upon submission.
  // It then sends the 3 input values (which are now the strings within the state) to the onsubmit function.
  // It then resets all the values back to a blank string.
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, age, colour });
    setName('');
    setAge('');
    setColour('');
  };

  // Below is the jsx of what the form will look like.
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
            First Name: <br />
            <input type="text" value={name} className='input-styling' placeholder='Unicorn Name' onChange={(e) => setName(e.target.value)} required />
            </label>
        <label>
            Last Name: <br />
            <input type="text" value={age} className='input-styling' placeholder='Unicorn Age' onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
            Email: <br />
            <input type="text" value={colour} className='input-styling' placeholder='Unicorn Colour' onChange={(e) => setColour(e.target.value)} required />
        </label>
        <button type="submit">Submit Review</button>
    </form>
    </div>
  );
};

export default AddUnicorn;