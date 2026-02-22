

import Navbar from "./Navbar/Navbar";
import Hero from "./Header/Hero";
import ProjectsSection from "./ProjectsSection/ProjectsSections";
import DeveloperSlider from "./DeveloperSlider/DeveloperSlider";

import Testimonials from "./ClientsFeedBack/Testimonials";
// import ConsultantForm from "./ConsultantForm/ConsultantForm";
import Footer from "./Footer/Footer.jsx"
import AboutGraphics from "./AboutGraphics/AboutGraphics.jsx"
import Services from "./Services/Services.jsx";
import Background from "./new-one/day1.jsx";




function App() {
  return (
    <>

 <Navbar />
     <Hero />
     < AboutGraphics />
     < Services />
     < ProjectsSection />
     < DeveloperSlider />
 <Testimonials />
 {/* < ConsultantForm /> */}
 <Background />

 
 < Footer />

    
   
      
    </>
  );
}

export default App;
