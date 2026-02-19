import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/About/AboutHero';
import AboutContent from '../components/About/AboutContent';
import TeamGrid from '../components/Team/TeamGrid';

const About: React.FC = () => {
    return (
        <Layout>
            <AboutHero />
            <AboutContent />
            <TeamGrid />
        </Layout>
    );
};

export default About;
