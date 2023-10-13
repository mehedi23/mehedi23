import './App.css';
import Topintro from './component/Topintro';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Myself from './component/Myself';
import ContactInfo from './component/ContactInfo';
import Footer from './component/Footer'
import curDot from 'cursor-dot';


if(window.location.pathname === "/portfolio"){
  const cursor = curDot({
    diameter: 80,
    borderWidth: 1,
    borderColor: '#fff',
    easing: 4,
    background: 'transparent'
  })
  
  cursor.over("body", {
    background: "#fff",
  });
  
  cursor.over(".or-color", {
    color: "#F6AE2D",
  });
  
  cursor.over(".or-bg-color", {
    background: "#F6AE2D"
  });
}



function App() {
  return (
    <>
      <Topintro/>
      <Services/>
      <Portfolio/>
      <Myself/>
      <ContactInfo/>
      <Footer/>
    </>
  );
}

export default App;
