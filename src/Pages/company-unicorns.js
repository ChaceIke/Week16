import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unicorn from '../Components/CompanyUnicorns/unicorn';
import AddUnicorn from '../Components/CompanyUnicorns/add-unicorn';

// This page is for 
const UnicornList = () => {

    // This state is to hold the company unicorns and the corresponding information.
    const [unicorns, setUnicorns] = useState([]);

    // This function is for sending the created unicornObjects to the database.
    // If the database successfully recieves and adds the unicorn, it will log out the object to the console and add the response to the unicorns state array.
    // If it doesn't work then it prints out an error to the console.
    const handleEmployeeSubmit = (unicornObject) => {
        axios
            .post('https://crudcrud.com/api/d8ae2fac283545b09d759c86b5fc55d0/unicorns', unicornObject)
            .then((response) => {
                console.log(response.data);
                setUnicorns([...unicorns, response.data]);
            })
            .catch((error) => {
                console.error('You got an error', error);
            }
        )
    }

    // This function is for removing unicorns from the table.
    // It takes a unicorn object and uses axios to send a delete request to the database.
    // If it works, it logs out a success and then removes the unicorn from the state.
    const handleRemoveUnicorn = (unicorn) => {
        axios
        .delete(`https://crudcrud.com/api/d8ae2fac283545b09d759c86b5fc55d0/unicorns/${unicorn.id}`)
        .then((response) => {
            console.log('Success D: ! You removed a company unicorn our company unicorn tracker!')
            setUnicorns(unicorns.filter((item) => item.id !== unicorn.id));
        })
        .catch((error) => {
            console.error('An error occurred again lol', error);
        });
    };

    // This function runs right when the site opens up and asks for all the unicorn entries in the database.
  useEffect(() => {
    // If it works, I set the unicorns state to the data that we recieved.
    // If it fails, it will print out an error to the console.
    axios
      .get('https://crudcrud.com/api/d8ae2fac283545b09d759c86b5fc55d0/unicorns')
      .then(response => {
        setUnicorns(response.data)
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

  }, []);

  // Below is the jsx for what I'd like the website page to look like
  // First I insert a jumbotron, then I move create the heading of the unicorn table.
  // In the body of the table, I map through the unicorns state and give each Unicorn component a prop with an individual unicorn.
  // I also give it the handleRemoveUnicorn function through a prop.
  return (
    <div className='container'>
        <div className='row'>
            <div className="jumbotron jumbotron-fluid text-white col">
                <div>
                    <h1>Our Employee Unicorn Pet List</h1>
                    <p>Here is a list of our valued unicorn friends who help us to work hard!</p>
                </div>
            </div>

            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Colour</th>
                    </tr>
                </thead>
                <tbody  className='border border-success'>
                    {unicorns.map((unicorn, index) => (
                        <Unicorn key={index} unicorn={unicorn} index={index} onDelete={handleRemoveUnicorn}/>
                    ))}
                </tbody>
            </table>
            <AddUnicorn onSubmit={handleEmployeeSubmit}/>
        </div>
    </div>
  );
};


export default UnicornList;