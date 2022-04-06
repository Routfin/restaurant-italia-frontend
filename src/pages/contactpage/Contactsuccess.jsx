import './contactsuccess.css';
import { LinkContainer } from 'react-router-bootstrap';

const Contactsuccess = () => {
  return (
    <div>
      <div className="contactContainer">
        <h3>Message sent!</h3>
        <p>Your message has been sent and we will send a reply to your email shortly.</p>
        <LinkContainer to='/'>
          <button>Return home page</button>        
        </LinkContainer>
      </div>
    </div>
  )
}

export default Contactsuccess