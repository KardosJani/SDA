import "./App.css";
import Testimonials from "./assets/Testimonials/Testimonials";
import Hero from "./components/hero/hero";
import Plans from "./components/Plans/plans";
import Program from "./components/Programs/program";
import Reasons from "./components/Reasons/reasons";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer/>
    </div>
  );
}

export default App;
