import './App.css';
import { Navbar, Hero, OurStory, Services, Offer, ReserveTable, Recommended, Menu, Blog, Reviews, Subscribe } from './components';
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
    </div>
  );
}

export default App;
