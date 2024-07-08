import { Cta } from './components/WarmReferralToolLandingPage/Cta';
import { Features } from './components/WarmReferralToolLandingPage/Features';
import { Footer } from './components/WarmReferralToolLandingPage/Footer';
import { Header } from './components/WarmReferralToolLandingPage/Header';
import { Hero } from './components/WarmReferralToolLandingPage/Hero';
import { HowItWorks } from './components/WarmReferralToolLandingPage/HowItWorks';
import { SocialProof } from './components/WarmReferralToolLandingPage/SocialProof';

export const WarmReferralToolLandingPage = () => {
  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <SocialProof />
      <Cta />
      <Features />
      <Cta />
      <HowItWorks />
      <Footer />
    </div>
  );
};
