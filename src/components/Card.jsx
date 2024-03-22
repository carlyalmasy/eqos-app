import bjoin from "../utilities/bjoin"

export default function Card({ children, color }) {
    return (
        <div className={bjoin(
            "min-h-full container rounded-lg drop-shadow-md flex shrink-0 justify-center w-[730px]",
            "bg-" + color
            )}
        >
            {children}
        </div>
    )
}

