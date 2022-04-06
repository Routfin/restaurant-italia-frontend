import './homepage.css';
import Herosection from '../../components/herosection/Herosection';
import Navegation from '../../components/navegation/Navegation';
import Aboutus from '../../components/aboutus/Aboutus';

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Aboutus />
    </div>
  )
}

export default Homepage