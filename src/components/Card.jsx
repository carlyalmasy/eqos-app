export default function Card({children}) {
    return (
        <div className="min-h-full container rounded-lg bg-white drop-shadow-md flex justify-center">
            {children}
        </div>
    )
}

