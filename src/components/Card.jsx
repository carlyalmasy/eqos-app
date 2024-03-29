import bjoin from "../utilities/bjoin"

export default function Card({ children, color, maxWidth, borderRadius, dropShadow, marginTop }) {
    return (
        <div className={bjoin(
            "min-h-full container flex flex-1 justify-center mx-auto",
            "bg-" + color, // bg-white bg-silver-100
            "max-w-[" + maxWidth + "]", // max-w-[500px]
            "rounded-" + borderRadius, // rounded-md rounded-sm
            "drop-shadow-" + dropShadow, // drop-shadow-none
            "mt-" + marginTop, // mt-14
            )}
        >
            {children}
        </div>
    )
}

