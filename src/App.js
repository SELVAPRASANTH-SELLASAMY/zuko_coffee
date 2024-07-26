import './App.css';
import { Navbar, Hero, OurStory, Services, Offer, ReserveTable, Recommended, Menu, Blog, Reviews, Subscribe, Footer } from './components';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
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
