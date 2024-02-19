import "./App.css";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MyMusic from "./pages/Music/MyMusic";

function App() {
  return (
    <>
        <Navbar />
        <MyMusic />
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
