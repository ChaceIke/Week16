import Accordion from 'react-bootstrap/Accordion';

// This is an accordion component that gives the users information on the home page.
// It has a dropdown for both the 'Our Mission' information, as well as the 'Employee Unicorn Policy Info'.
function Info() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our Mission</Accordion.Header>
        <Accordion.Body className='accordion-body'>
        Our primary objective at Securicorp is to ensure robust cyber protection for leading Fortune 500 companies across the United States. We dedicate our services to safeguarding the critical data these companies need to operate efficiently. Thanks to our rich experience and expertise, we've been able to offer proactive security solutions and defenses to numerous businesses.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Employee Unicorn Policy Info</Accordion.Header>
        <Accordion.Body className='accordion-body'>
        At Securicorp, we believe in blending work with a bit of magic. That's why we insist - yes, insist... that every employee adopts a unicorn from our local unicorn farm. Their presence in our premises is not just an employee morale booster but also a means of supporting our local economy. Through this unique initiative, we continue to make a positive impact on the community we deeply care about!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Info;