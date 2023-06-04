import React from 'react';
import Toast from 'react-bootstrap/Toast';

// This is a functional component that sends a toast to the user in the bottom right.
// This is addressed to any potential customers.
function CompanyToastMessage() {
  return (
    <Toast className='toast-placement'>
      <Toast.Header className='toast-header-change'>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Securicorp Advisors</strong>
        <small>2 mins ago</small>
      </Toast.Header>
      <Toast.Body className='toast-body-change'>Hey there! Interested in our protection services? Send us an email:<br /> Securicorp@companyemail.com</Toast.Body>
    </Toast>
  );
}

export default CompanyToastMessage;