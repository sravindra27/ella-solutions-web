import { Helmet } from 'react-helmet-async';
import Hero from '../components/specific/Hero';
import ServiceHighlights from '../components/specific/ServiceHighlights';
import QualityStatement from '../components/specific/QualityStatement';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>ELLA Solutions | Building Digital Excellence</title>
                <meta name="description" content="Expert website and mobile app development services. We build high-performance digital solutions." />
            </Helmet>
            <main>
                <Hero />
                <ServiceHighlights />
                <QualityStatement />
            </main>
        </>
    );
};

export default Home;
