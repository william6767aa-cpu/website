import TopBar from './TopBar';
import MainNav from './MainNav';
import Hero from './Hero';
import InfoBar from './InfoBar';
import Solutions from './Solutions';
import Testimonial from './Testimonial';
import PartnerSection from './PartnerSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MainNav />
      
      <main>
        <Hero />
        <InfoBar />
        <Solutions />
        <Testimonial />
        <PartnerSection />
      </main>
      
      <Footer />
    </div>
  );
}
