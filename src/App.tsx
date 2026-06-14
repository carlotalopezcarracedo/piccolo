/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import PizzaWheelHero from './components/PizzaWheelHero';
import EditorialMarquee from './components/EditorialMarquee';
import SpecialtiesInteractive from './components/SpecialtiesInteractive';
import FullMenu from './components/FullMenu';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-italian-green selection:text-white">
      <Header />
      <main>
        <PizzaWheelHero />
        <EditorialMarquee />
        <SpecialtiesInteractive />
        <FullMenu />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

