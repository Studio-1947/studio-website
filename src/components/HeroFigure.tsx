const TEAMS = [
    "/team/Anjali.webp", "/team/Ankita.webp", "/team/Anudiya.webp", "/team/Anushiya.webp",
    "/team/Astha.webp", "/team/Bina.webp", "/team/Nikhil_rai.webp", "/team/Pinaki.webp",
    "/team/Rabi.webp", "/team/Rahul.webp", "/team/Sankha.webp", "/team/Santam.webp",
    "/team/Shubhayu.webp", "/team/Soumic.webp", "/team/Soumo.webp", "/team/Subba.webp",
    "/team/Subhendu.webp", "/team/Zahid.webp"
];

const LOGOS = [
    "/logos/Bazmkaar Logo.svg", "/logos/Bhagyam.svg", "/logos/Fes.svg", "/logos/Jansahas.svg",
    "/logos/Logo.svg", "/logos/Nest homes.svg", "/logos/Rajkamal Logo.svg", "/logos/Remodel UN.svg",
    "/logos/Sikkim Himal.svg", "/logos/Sundargan.svg", "/logos/awch.svg", "/logos/ecopt.svg"
];

const ITEMS: string[] = [];
let t = 0, l = 0;
while (t < TEAMS.length || l < LOGOS.length) {
    if (t < TEAMS.length) ITEMS.push(TEAMS[t++]);
    if (l < LOGOS.length) ITEMS.push(LOGOS[l++]);
}

function ItemNode({ href, r, deg, duration, direction, size }: { href: string, r: number, deg: number, duration: number, direction: 1 | -1, size: number }) {
    const rad = (deg * Math.PI) / 180;
    const cx = r * Math.cos(rad);
    const cy = r * Math.sin(rad);
    const isLogo = href.includes('/logos/');
    const half = size / 2;

    return (
        <g transform={`translate(${cx}, ${cy})`}>
            <g style={{ animation: `spin-${direction === 1 ? 'ccw' : 'cw'} ${duration}s linear infinite`, transformOrigin: '0px 0px' }}>
                {/* Background circle — dark for logos (they have white fills), themed for photos */}
                <circle cx="0" cy="0" r={half} fill={isLogo ? "#1e293b" : undefined} className={isLogo ? undefined : "fill-white dark:fill-gray-800"} />
                {isLogo ? (
                    /* Logos: use foreignObject + img so browsers can render .svg files */
                    <foreignObject x={-half} y={-half} width={size} height={size}>
                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', background: '#1e293b' }}>
                            <img
                                src={encodeURI(href)}
                                loading="lazy"
                                decoding="async"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                alt="client logo"
                            />
                        </div>
                    </foreignObject>
                ) : (
                    /* Team photos: native SVG image works perfectly for .webp */
                    <image
                        href={href}
                        x={-half}
                        y={-half}
                        width={size}
                        height={size}
                        clipPath={`url(#clip-${size})`}
                        preserveAspectRatio="xMidYMid slice"
                    />
                )}
                <circle cx="0" cy="0" r={half} fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600" />
            </g>
        </g>
    );
}

export default function HeroFigure({ className }: { className?: string }) {
    // Ring Radii
    const r1 = 190; // Inner
    const r2 = 260; // Middle
    const r3 = 330; // Outer

    // Distribution
    const innerItems = ITEMS.slice(0, 6); // 6 items
    const middleItems = ITEMS.slice(6, 16); // 10 items
    const outerItems = ITEMS.slice(16, 30); // 14 items

    return (
        <div className={`relative flex items-center justify-center w-full h-full aspect-square ${className || ""}`}>
            <style>
                {`
                    @keyframes spin-cw {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes spin-ccw {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(-360deg); }
                    }
                `}
            </style>
            <svg
                viewBox="-350 -350 700 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                <defs>
                    <clipPath id="clip-40"><circle cx="0" cy="0" r="20" /></clipPath>
                    <clipPath id="clip-48"><circle cx="0" cy="0" r="24" /></clipPath>
                    <clipPath id="clip-36"><circle cx="0" cy="0" r="18" /></clipPath>
                </defs>

                {/* Central Wheel */}
                <g transform="translate(-163, -163)" className="text-black fill-current relative z-10">
                    <path
                        d="M162.939 121.16C186.015 121.16 204.722 139.867 204.722 162.943C204.722 186.019 186.015 204.726 162.939 204.726C139.863 204.726 121.156 186.019 121.156 162.943C121.156 139.867 139.863 121.16 162.939 121.16Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M162.942 0C206.461 0 247.346 16.8807 278.174 47.7092C308.943 78.4777 325.884 119.423 325.884 162.942C325.884 206.461 309.003 247.346 278.174 278.174C247.406 308.943 206.461 325.884 162.942 325.884C119.423 325.884 78.5376 309.003 47.7092 278.174C16.9406 247.406 0 206.461 0 162.942C1.29715e-06 119.423 16.8807 78.5376 47.7092 47.7092C78.4777 16.9406 119.423 1.30154e-06 162.942 0ZM175.932 111.102C171.741 109.965 167.312 109.426 162.822 109.426C158.333 109.426 153.903 110.084 149.713 111.102V28.1348C122.177 30.7687 97.0346 41.6634 76.8016 58.3647L135.465 117.028C127.863 121.578 121.458 127.983 116.909 135.585L58.2447 76.9216C41.5435 97.1546 30.7086 122.356 28.0148 149.832H111.042C109.905 154.023 109.366 158.452 109.366 162.942C109.366 167.431 110.025 171.861 111.042 176.051H28.0747C30.7086 203.587 41.6034 228.729 58.3045 248.962L116.968 190.298C121.518 197.901 127.923 204.306 135.526 208.855L76.8617 267.519C97.0948 284.22 122.296 295.055 149.772 297.749V214.781C153.963 215.919 158.392 216.458 162.882 216.458C167.372 216.458 171.801 215.799 175.991 214.781V297.749C203.528 295.115 228.669 284.16 248.902 267.519L190.238 208.855C197.841 204.306 204.246 197.901 208.795 190.298L267.426 248.929C284.112 228.701 294.937 203.513 297.629 176.051H214.662C215.799 171.861 216.338 167.431 216.338 162.942C216.338 158.452 215.679 154.023 214.662 149.832H297.629C294.995 122.296 284.041 97.1546 267.399 76.9216L208.735 135.585C204.186 127.983 197.781 121.578 190.179 117.028L248.842 58.3647C228.609 41.6634 203.408 30.8286 175.932 28.1348V111.102Z"
                    />
                </g>

                {/* Inner Ring (r1) - Rotating Clockwise - 6 items */}
                <g style={{ animation: `spin-cw 30s linear infinite`, transformOrigin: '0px 0px' }}>
                    <circle cx="0" cy="0" r={r1} fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="10 10" className="text-gray-400 dark:text-gray-500" />
                    {innerItems.map((item, i) => {
                        const deg = (360 / 6) * i + 15;
                        return <ItemNode key={i} href={item} r={r1} deg={deg} duration={30} direction={1} size={40} />;
                    })}
                </g>

                {/* Middle Ring (r2) - Rotating Counter-Clockwise - 10 items */}
                <g style={{ animation: `spin-ccw 40s linear infinite`, transformOrigin: '0px 0px' }}>
                    <circle cx="0" cy="0" r={r2} fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="12 12" className="text-gray-400 dark:text-gray-500" />
                    {middleItems.map((item, i) => {
                        const deg = (360 / 10) * i + 5;
                        const size = i % 2 === 0 ? 40 : (i % 3 === 0 ? 48 : 36);
                        return <ItemNode key={i} href={item} r={r2} deg={deg} duration={40} direction={-1} size={size} />;
                    })}
                </g>

                {/* Outer Ring (r3) - Rotating Clockwise - 14 items */}
                <g style={{ animation: `spin-cw 50s linear infinite`, transformOrigin: '0px 0px' }}>
                    <circle cx="0" cy="0" r={r3} fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="15 15" className="text-gray-400 dark:text-gray-500" />
                    {outerItems.map((item, i) => {
                        const deg = (360 / 14) * i - 10;
                        const size = i % 2 === 0 ? 48 : (i % 3 === 0 ? 36 : 40);
                        return <ItemNode key={i} href={item} r={r3} deg={deg} duration={50} direction={1} size={size} />;
                    })}
                </g>

            </svg>
        </div>
    );
}

