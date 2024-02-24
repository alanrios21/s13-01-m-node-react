import "./App.css";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ProfileFill } from "./pages/profile/ProfileFill";
import ErrorPage from "./error-page";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MyMusic from "./pages/Music/MyMusic";
import Videos from "./pages/Videos/Videos";
import TuVideo from "./pages/TuVideo/TuVideo";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<MyMusic />} />
            <Route path="videos" element={<Videos />} />
            <Route path="music" element={<MyMusic />} />
            <Route path="my-video" element={<TuVideo />} />
            <Route path="auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="profile">
              <Route path="fill" element={<ProfileFill />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
