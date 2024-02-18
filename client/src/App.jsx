import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import MyMusic from './pages/Music/MyMusic'



function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <MyMusic />
      <Routes>
        <Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App