
import './App.css';
import Router from "../src/Router";
import Testimonial from "./components/Testimonials/Testimonials"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className='App'>
        <Header/>
        <Router/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}

export default App;
