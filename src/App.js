import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navegation from './components/navegation/Navegation';
import Footerpage from './components/footerpage/Footerpage';
import Contactpage from './pages/contactpage/Contactpage';
import Contactsuccess from './pages/contactpage/Contactsuccess';
import Contacterr from './pages/contactpage/Contacterror';
import Homepage from './pages/homepage/Homepage';
import Menupage from './pages/menupage/Menupage';

function App() {
  return (
    <BrowserRouter>
      <Navegation />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/menu' exact element={<Menupage />} />
          <Route path='/contact' exact element={<Contactpage />} />
          <Route path='/contactsuccess' exact element={<Contactsuccess />} />
          <Route path='/contacterr' exact element={<Contacterr />} />
        </Routes>
        <Footerpage />
    </BrowserRouter>
  );
}

export default App;
