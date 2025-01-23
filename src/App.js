import About from "./components/About";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Process from "./components/Process";
import SearchBar from "./components/SearchBar";
import TrustedBy from "./components/TrustedBy";
import VideoSection from "./components/VideoSection";
import WhyRegisterKaro from "./components/WhyRegisterKaro";
import Services from './components/Services'
import Blogs from './components/Blogs'
import WhyChoose from "./components/WhyChoose";
import Faq from "./components/Faq";
import ManageServices from "./components/ManageServices";
import WhatPeopleSay from "./components/WhatPeopleSay";
import Navbar from "./components/Navbar";
import AboveNavbar from "./components/AboveNavbar";
import Header from "./components/header";


function App() {
  return (
    <>
    <AboveNavbar      />  
    <Navbar />
    <Header/>
    <TrustedBy />
    <Services/>
    <About />
    <WhyChoose/>  
    <VideoSection />
    <Process />
    <Blogs/>
    <WhatPeopleSay/>
    <Faq/>
    <ManageServices/>
    <WhyRegisterKaro />
    <SearchBar/>
    <Company/>
    <Footer />
    
    </>
  );
}

export default App;
