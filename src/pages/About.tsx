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
import { usePageMeta } from '../hooks/usePageMeta';

const About: React.FC = () => {
    usePageMeta({ title: 'About Us – Studio 1947', description: 'Meet the team behind Studio 1947 — a creative studio born in the hills of Mirik, Darjeeling, building with purpose for Indian and global clients.' });
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
