import Toast from 'react-bootstrap/Toast';

// This is a toast message asking any users if they'd like to work at the company.
function CompanyHireMessage() {
  return (
    <Toast className='toast-placement'>
      <Toast.Header className='toast-header-change'>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Securicorp Hiring Team</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className='toast-body-change'>Do you want to work for the most prestigious cyber-security company in the world? Contact our hiring team at SecuricorpHiring@companyemail.com</Toast.Body>
    </Toast>
  );
}

export default CompanyHireMessage;