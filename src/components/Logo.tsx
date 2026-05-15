import React from 'react';

interface LogoProps {
    className?: string;
    activeSpoke?: number | null;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <img
            src="/Logo-studio-new.svg"
            alt="Studio 1947 Logo"
            className={`${className} dark:brightness-0 dark:invert`}
        />
    );
};

export default Logo;
