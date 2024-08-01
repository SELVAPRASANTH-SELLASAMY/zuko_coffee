import './App.css';
import { Navbar, Hero, OurStory, Services, Offer, ReserveTable, Recommended, Menu, Blog, Reviews, Subscribe, Footer } from './components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Zuko Coffee</title>
          <meta name='description' content="Eliza is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"/>
          <meta name='keywords' content="zuko coffee, UI development, ReactJS, Selvaprasanth's project, landing page for coffee shop"/>
          <meta name='author' content='Selvaprasanth'/>
        </Helmet>
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
    </HelmetProvider>
  );
}

export default App;