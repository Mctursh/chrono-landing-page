import FAQs from './components/FAQs';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero/index';
import InGovernance from './components/InGovernance';
import InYourHands from './components/InYourHands';
import Launchpad from './components/Launchpad';
import SDKs from './components/Sdks';

import './App.css';

function App() {
  return (
    <div className="font-grotesk px-20 py-20 bg-dark min-h-screen min-w-screen overflow-y-auto">
      <Hero />
      <Features />
      <Launchpad />
      <InGovernance />
      <InYourHands />
      <SDKs />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
