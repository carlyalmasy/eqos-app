import bjoin from "../utilities/bjoin"

export default function Card({ children, color, maxWidth }) {
    return (
        <div className={bjoin(
            "min-h-full container rounded-lg drop-shadow-md flex shrink-1 justify-center mx-auto",
            "bg-" + color,
            "max-w-[" + maxWidth + "]", // max-w-[500px]
            )}
        >
            {children}
        </div>
    )
}

