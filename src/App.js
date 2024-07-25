import './App.css';
import { Navbar, Hero, OurStory, Services, Offer, ReserveTable, Recommended, Menu, Blog } from './components';
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
      </main>
    </div>
  );
}

export default App;
