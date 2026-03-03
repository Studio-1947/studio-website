import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/About/AboutHero';
import AboutContent from '../components/About/AboutContent';
import CeoVoice from '../components/About/CeoVoice';
import HelipadSection from '../components/About/HelipadSection';
import TeamGrid from '../components/Team/TeamGrid';
import TeamHubs from '../components/Team/TeamHubs';
import Culture from '../components/About/Culture';
import CareersCTA from '../components/About/CareersCTA';

const About: React.FC = () => {
    return (
        <Layout>
            <AboutHero />
            <AboutContent />
            <CeoVoice />
            <HelipadSection />
            <TeamGrid />
            <TeamHubs />
            <Culture />
            <CareersCTA />
        </Layout>
    );
};

export default About;
