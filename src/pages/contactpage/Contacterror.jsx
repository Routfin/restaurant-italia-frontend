import './contacterror.css';
import { LinkContainer } from 'react-router-bootstrap';

const Contacterror = () => {
  return (
    <div>
        <div>
        <div className="contactContainer">
          <h3>Ops...!</h3>
          <p>An error has occurred, please try again later.</p>
          <LinkContainer to='/contact'>
            <button>Return home page</button>          
          </LinkContainer>
        </div>
      </div>
    </div>
  )
}

export default Contacterror