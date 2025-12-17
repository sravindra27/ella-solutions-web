import { Helmet } from 'react-helmet-async';
import Hero from '../components/specific/Hero';
import ServiceHighlights from '../components/specific/ServiceHighlights';
import QualityStatement from '../components/specific/QualityStatement';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ELLA Solutions | Building Digital Excellence</title>
        <meta
          name="description"
          content="Expert website and mobile app development services. We build high-performance digital solutions."
        />

        <meta property="og:title" content="ELLA Solutions | Building Digital Excellence" />
        <meta
          property="og:description"
          content="Reliable, scalable, and modern digital solutions for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ellasolutions.in" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main id="main-content">
        <Hero />
        <section>
          <ServiceHighlights />
        </section>
        <section>
          <QualityStatement />
        </section>
      </main>
    </>
  );
};

export default Home;