export default function Label({ name }) {
    return (
        <span className={`w-40 pb-1 font-semibold border-b-2 border-white bg-neutral-400 text-center text-neutral-950 dark:text-neutral-50 dark:bg-neutral-600 rounded-t
        `}>{name || 'Rat Name'}</span>
    );
}