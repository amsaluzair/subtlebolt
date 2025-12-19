import React from 'react';

export const BackgroundBeams: React.FC = () => {
    // Generate an array of beams with random properties
    // We'll use a fixed set of columns for the grid look
    const columns = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center opacity-30">
            <div className="w-full max-w-7xl h-full grid grid-cols-6 md:grid-cols-12 gap-4 mx-auto relative">
                {columns.map((col) => (
                    <div key={col} className="relative h-full w-[1px] bg-white/5 mx-auto">
                        {/* Randomly place beams on some columns */}
                        {col % 3 === 0 && (
                            <div
                                className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-brand-yellow/50 to-transparent"
                                style={{
                                    animation: `beam-drop ${3 + (col % 4)}s infinite linear`,
                                    animationDelay: `${col * 0.5}s`,
                                }}
                            />
                        )}
                        {/* Another set of beams with different timing */}
                        {col % 4 === 0 && col % 3 !== 0 && (
                            <div
                                className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                                style={{
                                    animation: `beam-drop ${4 + (col % 5)}s infinite linear`,
                                    animationDelay: `${col * 1.2}s`,
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes beam-drop {
                    0% {
                        top: -20%;
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        top: 120%;
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};
