import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default App
