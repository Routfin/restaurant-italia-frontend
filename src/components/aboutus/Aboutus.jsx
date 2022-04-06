import './aboutus.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import italy from '../../images/hero/italyimage.webp';

const Aboutus = () => {
  return (
    <div className="center-vertical">
      <div className="about-us-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="img-head">
                <img src={italy} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="text-head">
                know more about us
              </h2>
              <div className="break-small mb-2"></div>
              <p className='text-para'>
              Founded in 1978 in New York City by renowned Italian chef Lecate Romagnoli, Delizie Pastas has always aimed to bring Italian essence and culture to the most popular city in the world.
              Standing out for our best pasta made with the best Italian flour by Naples.
              </p>
              <div className="row">
                <div className="col-12 col-md-4 mb-2 mb-md-0">
                  <div className="box">
                    <i className="fa fa-users mb-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Aboutus