import React, { useState } from 'react';
import Card from './Card.jsx';
import rats from '../data/rats.js';

export default function Grid() {
    const [selectedId, setSelectedId] = useState(null);

    const [flippedStates, setFlippedStates] = useState(
        () => rats.reduce((acc, rat) => {
            acc[rat.id] = false;
            return acc;
        }, {})
    );

    const toggleFlip = (id) => {
        setFlippedStates(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const resetFlips = () => {
        setSelectedId(null);
        setFlippedStates(
            rats.reduce((acc, rat) => {
                acc[rat.id] = false;
                return acc;
            }, {})
        );
    };

    const handleSelect = (id) => {
        setSelectedId(id); 
    };

    return (
        <div>
            <div className="flex justify-end max-w-lg mx-auto">
                <button 
                    onClick={resetFlips} 
                    className="cursor-pointer mt-4 px-4 py-2 rounded bg-neutral-200 dark:text-white
                            text-black dark:bg-neutral-900"
                    >
                    Reset Flips
                </button>
            </div>
            <div className="my-6 grid [grid-template-columns:repeat(2,auto)] gap-4 md:[grid-template-columns:repeat(3,auto)] md:gap-6 lg:[grid-template-columns:repeat(5,auto)] lg:gap-8 justify-center">
                {rats.map((rat) => (
                    <Card
                        key={rat.id}
                        rat={rat}
                        isSelected={rat.id === selectedId}
                        isFlipped={flippedStates[rat.id]}
                        onSelect={() => {
                            handleSelect(rat.id);
                            toggleFlip(rat.id);
                        }} />
                ))}
            </div>
        </div>
    );
}
