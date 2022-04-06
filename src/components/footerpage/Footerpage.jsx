import './footerpage.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footerpage = () => {
  return (
    <footer>
        <div className="row d-flex justify-content-center">
            <div>
                <p id='copy'>
                    Copyright 2022 All Rights Reserved By:
                    <a href="#">
                        <strong className="text-info">Delizie Pastas</strong>
                    </a>
                </p>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="text-center">
                <ul className="list-unstyled list-inline" id='socialMedias'>
                    <li className="list-inline-item" id='socialMedia'>
                        <a href="#" className="text-dark"><i><FacebookIcon /></i></a>
                    </li>
                    <li className="list-inline-item" id='socialMedia' > 
                        <a href="#" className="text-dark"><i><TwitterIcon /></i></a>
                    </li>
                    <li className="list-inline-item" id='socialMedia'>
                        <a href="#" className="text-dark"><i><InstagramIcon /></i></a>
                    </li>
                    <li className="list-inline-item" id='socialMedia'>
                        <a href="#" className="text-dark"><i><LinkedInIcon /></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footerpage