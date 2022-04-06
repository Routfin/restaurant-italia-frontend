import axios from 'axios';
import { useState } from 'react';
import './contactpage.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Form, Button } from 'react-bootstrap';

const Contactpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/contact', {
        name,
        email,
        message,
      });
      window.location.href="/contactsuccess";
    } catch (err) {
      window.location.href="/contacterr";
    }
  };

  return (
    <div>
      <div className="contactContainer">
        <div className="cellphoneContact">
          <hr />
          <h2>Want to talk to us? call now!</h2>
          <p>+01 993 8743-0498 <i><LocalPhoneIcon /></i></p>
          <hr />
        </div>
        <div className="emailContact">
          <h2>Send us a message <i><EmailIcon /></i></h2>
          <p>If you prefer, you can send us a message and we will reply to your email within 24 hours</p>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label id='formConfig'>Complete Name</Form.Label>
              <Form.Control type="text" placeholder="Enter complete name" onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted">
              </Form.Text>
             </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label id='formConfig'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
             </Form.Group>

             <div className="col-md-12">
               <label className="form-a" id='formConfig'>Comments, questions? Text us!</label>
               <textarea id='formConfig' className="form-control" id='comments' rows='3' placeholder="Your message here" onChange={(e) => setMessage(e.target.value)}></textarea>
             </div>
            <div className="contactBtn">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </div>
            </Form>
        </div>
      </div>
    </div>
  )
}

export default Contactpage