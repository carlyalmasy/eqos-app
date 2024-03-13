import bjoin from "../utilities/bjoin"

export default function Card({ children, color }) {
    return (
        <div className={bjoin(
            "min-h-full container rounded-lg drop-shadow-md flex justify-center",
            "bg-" + color
            )}
        >
            {children}
        </div>
    )
}

