import Navbar from './components/Navbar'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Featured from './components/Featured';
import VideoView from './components/VideoView';
import Properties from './components/Properties';
import Cards from './components/Cards';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HeroSection />
      <Featured />
      <VideoView/>
      <Properties />
      <Cards />
      <Contact />

    </div>
  );
}

export default App;
