export default function PageContainer(props) {
    return (
        <>
            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 relative min-h-screen"
                style={{minHeight: `calc(100vh - 256px)`}}
                >
                {props.children}
            </div>
        </>
    );
}
