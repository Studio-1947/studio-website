import { Link } from 'react-router-dom';

interface VerticalCardProps {
  title: string;
  description: string;
  href?: string;
}

const generateImageSvg = (title: string): string => {
  // Generate a deterministic color based on the title
  const hash = title.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);
  
  const hue = Math.abs(hash) % 360;
  const colors = [
    [`hsl(${hue}, 70%, 60%)`, `hsl(${(hue + 30) % 360}, 70%, 50%)`],
    [`hsl(${hue}, 75%, 65%)`, `hsl(${(hue + 60) % 360}, 75%, 55%)`],
    [`hsl(${hue}, 80%, 70%)`, `hsl(${(hue + 90) % 360}, 80%, 60%)`],
  ];
  
  const colorPair = colors[Math.abs(hash) % colors.length];
  
  // Create diverse patterns based on title length
  const patternType = Math.abs(hash) % 4;
  
  const getSvgPattern = () => {
    switch(patternType) {
      case 0: // Grid pattern
        return `
          <defs>
            <pattern id="grid-${hash}" x="20" y="20" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="20" height="20" fill="${colorPair[0]}" opacity="0.6"/>
              <circle cx="25" cy="25" r="8" fill="${colorPair[1]}" opacity="0.8"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="${colorPair[1]}" opacity="0.15"/>
          <rect width="400" height="400" fill="url(#grid-${hash})"/>
        `;
      case 1: // Wave pattern
        return `
          <defs>
            <linearGradient id="wave-${hash}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:${colorPair[0]};stop-opacity:0.4" />
              <stop offset="100%" style="stop-color:${colorPair[1]};stop-opacity:0.6" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="url(#wave-${hash})"/>
          <circle cx="100" cy="100" r="80" fill="${colorPair[0]}" opacity="0.3"/>
          <circle cx="300" cy="300" r="100" fill="${colorPair[1]}" opacity="0.2"/>
        `;
      case 2: // Abstract shapes
        return `
          <rect width="400" height="400" fill="${colorPair[1]}" opacity="0.1"/>
          <rect x="50" y="50" width="120" height="120" fill="${colorPair[0]}" opacity="0.5" transform="rotate(25 110 110)"/>
          <circle cx="280" cy="120" r="60" fill="${colorPair[1]}" opacity="0.4"/>
          <polygon points="100,300 200,250 280,320" fill="${colorPair[0]}" opacity="0.3"/>
        `;
      default: // Gradient blend
        return `
          <defs>
            <radialGradient id="blend-${hash}" cx="30%" cy="30%">
              <stop offset="0%" style="stop-color:${colorPair[0]};stop-opacity:0.6" />
              <stop offset="100%" style="stop-color:${colorPair[1]};stop-opacity:0.2" />
            </radialGradient>
          </defs>
          <rect width="400" height="400" fill="url(#blend-${hash})"/>
          <rect x="80" y="80" width="240" height="240" fill="none" stroke="${colorPair[0]}" stroke-width="3" opacity="0.4"/>
          <circle cx="200" cy="200" r="70" fill="none" stroke="${colorPair[1]}" stroke-width="2" opacity="0.6"/>
        `;
    }
  };
  
  const svg = `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#fafafa"/>
      ${getSvgPattern()}
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function VerticalCard({ title, description, href }: VerticalCardProps) {
  const imageSrc = generateImageSvg(title);
  
  const content = (
    <>
      {/* Generated Image */}
      <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden mb-2">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>
    </>
  );

  const cardClasses = "bg-white dark:bg-gray-800 rounded-2xl p-6 h-full flex flex-col gap-4 text-left group hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300";

  return href ? (
    <Link to={href} className={cardClasses}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
