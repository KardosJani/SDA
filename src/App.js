import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./assets/Testimonials/Testimonials";
import Hero from "./components/hero/hero";
import Plans from "./components/Plans/plans";
import Program from "./components/Programs/program";
import Reasons from "./components/Reasons/reasons";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import Signin from "./components/SingIn/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Hero />
              <Program />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join />
              <Footer />
            </div>
          }
        />
        <Route path="/Signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
