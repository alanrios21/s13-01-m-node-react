import "./App.css";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { ProfileFill } from "./pages/profile/ProfileFill"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MyMusic from "./pages/Music/MyMusic";
import Videos from './pages/Videos/Videos';
import TuVideo from "./pages/TuVideo/TuVideo";
import Pay from "./pages/Pay/Pay";
import NotPay from "./pages/Pay/NotPay";
import PaymentMehod from "./pages/Pay/PaymentMehod";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51O4gkgD3YXfw7A9OCrcmMR7KH5RB0lHjigzLXqtap7qigk2Le0kh9Q0OGTjSaYpdSTRTcJS1yIFA9jIVML956B9O00NqWfPeG6"
);

function App() {
  return (
    <>
        <Navbar />
        <Routes>
        <Route path="/videos" element={<Videos />} />
        <Route path="/music" element={<MyMusic />} />
        <Route path="/my-video" element={<TuVideo />} />
        <Route path="/pay" element={ <Elements stripe={stripePromise}><Pay /> </Elements>} />
        <Route path="/NotPay" element={<NotPay />} />
        <Route path="/crowdfounding" element={<PaymentMehod />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/profile">
            <Route path="fill" element={<ProfileFill />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
