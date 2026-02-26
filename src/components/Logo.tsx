import React from 'react';

interface LogoProps {
    className?: string;
    activeSpoke?: number | null;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <img
            src="/logos/logowebsite.png"
            alt="Studio 1947 Logo"
            className={className}
        />
    );
};

export default Logo;
