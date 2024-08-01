
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home,Booking} from './pages'
import {Navigation} from './components'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/online-booking' element={<Booking/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
