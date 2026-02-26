export default function HeroFigure({ className }: { className?: string }) {
    const r1 = 195; // Inner text ring
    const r2 = 275; // Middle text ring
    const r3 = 355; // Outer text ring

    // Plenty of repeated text to fill each ring completely at larger font sizes
    const innerText =
        "STUDIO 1947 · স্টুডিও ১৯৪৭ · STUDIO 1947 · স্টুডিও ১৯৪৭ · STUDIO 1947 · স্টুডিও ১৯৪৭ · STUDIO 1947 · স্টুডিও ১৯৪৭ · ";
    const middleText =
        "LOCAL WISDOM FOR GLOBAL IMPACT · DESIGN · TECHNOLOGY · SOCIAL MEDIA · STORY TELLING · DATA · ERP SOLUTIONS · DASHBOARDS · STUDIO 1947 · স্টুডিও ১৯৪৭ · ";
    const outerText =
        "BRANDING · STRATEGY · MOBILE APPLICATION · WEBSITE · COMMUNICATION · CAMPAIGN · ৯৮৩৪ ৫৩৮৭৪৮ · স্টুডিও ১৯৪৭ · STUDIO 1947 · ৯৮৩৪ ৫৩৮৭৪৮ · ";

    return (
        <div
            className={`relative flex items-center justify-center w-full h-full aspect-square ${className || ""}`}
        >
            <style>
                {`
                    @keyframes hero-spin-cw {
                        from { transform: rotate(0deg); }
                        to   { transform: rotate(360deg); }
                    }
                    @keyframes hero-spin-ccw {
                        from { transform: rotate(0deg); }
                        to   { transform: rotate(-360deg); }
                    }
                `}
            </style>

            <svg
                viewBox="-430 -430 860 860"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible text-[#6900DF] dark:text-white"
            >
                <defs>
                    <path id="ring-inner" d={circlePath(r1)} />
                    <path id="ring-middle" d={circlePath(r2)} />
                    <path id="ring-outer" d={circlePath(r3)} />
                </defs>

                {/* ── Central Ashoka Chakra (static) ── */}
                <g transform="translate(-163, -163)" className="fill-current">
                    <path d="M162.939 121.16C186.015 121.16 204.722 139.867 204.722 162.943C204.722 186.019 186.015 204.726 162.939 204.726C139.863 204.726 121.156 186.019 121.156 162.943C121.156 139.867 139.863 121.16 162.939 121.16Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M162.942 0C206.461 0 247.346 16.8807 278.174 47.7092C308.943 78.4777 325.884 119.423 325.884 162.942C325.884 206.461 309.003 247.346 278.174 278.174C247.406 308.943 206.461 325.884 162.942 325.884C119.423 325.884 78.5376 309.003 47.7092 278.174C16.9406 247.406 0 206.461 0 162.942C1.29715e-06 119.423 16.8807 78.5376 47.7092 47.7092C78.4777 16.9406 119.423 1.30154e-06 162.942 0ZM175.932 111.102C171.741 109.965 167.312 109.426 162.822 109.426C158.333 109.426 153.903 110.084 149.713 111.102V28.1348C122.177 30.7687 97.0346 41.6634 76.8016 58.3647L135.465 117.028C127.863 121.578 121.458 127.983 116.909 135.585L58.2447 76.9216C41.5435 97.1546 30.7086 122.356 28.0148 149.832H111.042C109.905 154.023 109.366 158.452 109.366 162.942C109.366 167.431 110.025 171.861 111.042 176.051H28.0747C30.7086 203.587 41.6034 228.729 58.3045 248.962L116.968 190.298C121.518 197.901 127.923 204.306 135.526 208.855L76.8617 267.519C97.0948 284.22 122.296 295.055 149.772 297.749V214.781C153.963 215.919 158.392 216.458 162.882 216.458C167.372 216.458 171.801 215.799 175.991 214.781V297.749C203.528 295.115 228.669 284.16 248.902 267.519L190.238 208.855C197.841 204.306 204.246 197.901 208.795 190.298L267.426 248.929C284.112 228.701 294.937 203.513 297.629 176.051H214.662C215.799 171.861 216.338 167.431 216.338 162.942C216.338 158.452 215.679 154.023 214.662 149.832H297.629C294.995 122.296 284.041 97.1546 267.399 76.9216L208.735 135.585C204.186 127.983 197.781 121.578 190.179 117.028L248.842 58.3647C228.609 41.6634 203.408 30.8286 175.932 28.1348V111.102Z" />
                </g>

                {/* ── Inner Ring — CW ── */}
                <g style={{ animation: "hero-spin-cw 40s linear infinite", transformOrigin: "0 0" }}>
                    <circle cx="0" cy="0" r={r1} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
                    <text fill="currentColor" fontSize="22" fontWeight="800" letterSpacing="4" fontFamily="sans-serif">
                        <textPath href="#ring-inner" startOffset="0%">
                            {innerText}
                        </textPath>
                    </text>
                </g>

                {/* ── Middle Ring — CCW (opposite) ── */}
                <g style={{ animation: "hero-spin-ccw 55s linear infinite", transformOrigin: "0 0" }}>
                    <circle cx="0" cy="0" r={r2} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
                    <text fill="currentColor" fontSize="20" fontWeight="700" letterSpacing="3.5" fontFamily="sans-serif">
                        <textPath href="#ring-middle" startOffset="0%">
                            {middleText}
                        </textPath>
                    </text>
                </g>

                {/* ── Outer Ring — CW ── */}
                <g style={{ animation: "hero-spin-cw 70s linear infinite", transformOrigin: "0 0" }}>
                    <circle cx="0" cy="0" r={r3} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
                    <text fill="currentColor" fontSize="24" fontWeight="800" letterSpacing="5" fontFamily="sans-serif">
                        <textPath href="#ring-outer" startOffset="0%">
                            {outerText}
                        </textPath>
                    </text>
                </g>
            </svg>
        </div>
    );
}

function circlePath(r: number): string {
    return [
        `M 0 -${r}`,
        `A ${r} ${r} 0 1 1 0 ${r}`,
        `A ${r} ${r} 0 1 1 0 -${r}`,
    ].join(" ");
}
