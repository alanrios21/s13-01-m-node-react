import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {BrowserRouter ,Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App