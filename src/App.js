import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SocialLogin from "./Pages/Login/SocialLogin";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socialLogin" element={<SocialLogin />} />
      </Routes>
    </div>
  );
}

export default App;
