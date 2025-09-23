import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import "react-toastify/dist/ReactToastify.css";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Services />
      {/* <Testimonials />
      <Contact /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
