import "./App.css";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MyMusic from "./pages/Music/MyMusic";
import Videos from './pages/Videos/Videos';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path="/music" element={<MyMusic />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
