import bjoin from "../utilities/bjoin"

export default function Container({ className, children }) {
    return (
        <>
            <div
                className={ bjoin(
                    "container mx-auto px-4 sm:px-6 lg:px-8 my-16 relative min-h-screen",
                    className
                ) }
                style={{minHeight: `calc(100vh - 256px)`}}
            >
                { children }
            </div>
        </>
    );
}
