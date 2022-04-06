import './menupage.css';

import { Card, CardGroup } from 'react-bootstrap';

import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import image1 from '../../images/pngimages/pizza.png';
import image2 from '../../images/pngimages/bolognesepast.png';
import image3 from '../../images/pngimages/pastawhite.png';
import image4 from '../../images/pngimages/tiramisupngfull.png';
import image5 from '../../images/pngimages/ciabattadessertpng.png';
import image6 from '../../images/pngimages/grapejuicepng.png';
import image7 from '../../images/pngimages/taliacjuicepng.png';

const Menupage = () => {
  return (
    <div>
      <div className="menuContainer">
        <h2>Our Menu</h2>
        <p>Check out our best deals</p>
      </div>
      <hr />
      <div className="pastaContainer">
        <h2>Our pastas</h2>
      </div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5" id='c1'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-up">
              <div className="p-2 border-bottom">
                <img src={image2} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Bolognese speciale Gragnano</h5>
                <p>Delizie pasta with bolognese sauce eccellere </p>
                <h6 className="text-right">$37,90</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5" id='c2'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-down">
              <div className="p-2 border-bottom">
                <img src={image3} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Bianca Sauce Speciale</h5>
                <p>Delizie pasta with white sauce Béchamel</p>
                <h6 className="text-right">$39,90</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="dessetContainer">
          <h2>Our Desserts</h2>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5" id='c1'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-up">
              <div className="p-2 border-bottom">
                <img src={image4} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Tiramisu Cioccolato Romag</h5>
                <p>Made with champagne and cioccolate choco Treviso</p>
                <h6 className="text-right">$29,90</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5" id='c2'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-down">
              <div className="p-2 border-bottom">
                <img src={image5} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Ciabatta Speciale Romag</h5>
                <p>Filled with cream or chocolate Treviso</p>
                <h6 className="text-right">$27,80</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="drinksContainer">
          <h2>Our Drinks</h2>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5" id='c1'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-up">
              <div className="p-2 border-bottom">
                <img src={image6} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Grape juice gentle Sangiovese</h5>
                <p>Made with the best grapes Sangiovese</p>
                <h6 className="text-right">$19,90</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5" id='c2'>
          <div className="ps">
            <div className="d-flex flex-row p-1 border-bottom" data-aos="fade-down">
              <div className="p-2 border-bottom">
                <img src={image7} alt=""  id='imgMenu' />
              </div>
              <div className="pt-3 pl-3 pr-1 flex-grow-1 border-bottom" id='plat'>
                <h5>Cultural Drink speciale</h5>
                <p>Made with the best combinations of northern Italy</p>
                <h6 className="text-right">$23,90</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pizzaContainer">
        <h2>Yes, <span>we have</span> <i>pizza!</i> <i><LocalPizzaIcon /></i></h2>
        <h3>+01 938 8509-0493</h3>
        <p>Call us and order right now</p>
        <img src={image1} alt="" />
        <h4>Or come visit us</h4>
        <p>20 Citle 40th Street New York, NY 10023</p>
      </div>
    </div>
  )
}

export default Menupage