import { useRef } from 'react';
import './App.css';
import { Navbar, Hero, OurStory, Services, Offer, ReserveTable, Recommended, Menu, Blog, Reviews, Subscribe, Footer } from './components';
function App() {
  const mainElement = useRef();
  return (
    <div className="App">
      <Navbar mainElement={mainElement}/>
      <main ref={mainElement}>
        <Hero/>
        <OurStory/>
        <Services/>
        <Offer/>
        <ReserveTable/>
        <Recommended/>
        <Menu/>
        <Blog/>
        <Reviews/>
        <Subscribe/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
