import'./herosection.css';

import hero from '../../images/hero/pasta.png';

const Herosection = () => {
  return (
      <section className="container">
        <div className="textContainer">
          <h2>Big Retailer</h2>
          <p>The best Italian pasta straight from Naples at the lowest cost</p>
        </div>
        <div className="imgContainer">
          <img src={hero} alt="" />
        </div>
        <div className="visitContainer">
          <h1>Visit us</h1>
          <h3>20 Citle 40th Street New York, NY 10023</h3>
        </div>
      </section>
    )
}

export default Herosection