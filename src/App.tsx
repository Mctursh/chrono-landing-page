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
    <main className="bg-dark desktop:max-w-ful desktop-above:max-w-[1440px] desktop-above:my-0 desktop-above:mx-auto">
      <div className="font-grotesk px-20 py-20 bg-dark min-h-screen min-w-screen overflow-y-auto 
        desktop-mini:px-16
        ipad:px-14
        android:px-10
        android:py-14
        phablet:px-8
        iphone:px-5
        "
        >
        <Hero />
        <Features />
        <Launchpad />
        <InGovernance />
        <InYourHands />
        <SDKs />
        <FAQs />
        <Footer />
      </div>
    </main>
  );
}

export default App;
