import Label from './Label';

export default function Card({ rat, isSelected, isFlipped, onSelect }) {
    return (
        <div className="flex flex-col items-center">

            <button
                onClick={() => {
                    onSelect();
                }}
                className={`relative w-40 h-60 cursor-pointer rounded shadow-lg m-2
                    focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-blue-600
                    ring-4 dark:ring-neutral-600 ring-neutral-400 
                    ring-offset-1 ring-offset-neutral-400 focus:ring-offset-blue-600
                    dark:ring-offset-neutral-600 dark:focus:ring-offset-white
                    transition-transform duration-500 transform-style-preserve-3d
                    ${isFlipped ? 'rotate-y-180' : ''}
                    `}
            >
                <div
                    className="w-full h-full perspective transform-style-preserve-3d">
                    {/* FRONT */}
                    <div
                        className="absolute w-full h-full flex flex-col backface-hidden items-center justify-center rounded">
                        <Label name={rat.name} />
                        <div className="flex-grow w-40 h-60 flex items-center justify-center overflow-hidden rounded-b">
                            <img
                                src={rat.img}
                                alt={`Image of ${rat.name}`}
                                loading="lazy"
                                className="border-2 border-t-0 rounded-b border-white inline-block w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute w-full h-full flex-col backface-hidden rotate-y-180 flex items-center justify-center rounded">
                        <Label name={rat.name} />
                        <div className="flex-col flex w-40 h-60 items-center py-2 bg-neutral-400 dark:bg-neutral-600 rounded-b">
                            <p className="text-neutral-900 text-sm dark:text-neutral-50">{rat.source || 'Unknown Source'}</p>
                            <div className="flex-1 flex items-center">
                                <p className="mb-10 text-base text-neutral-800 dark:text-neutral-200">{rat.description || "Maniac"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}