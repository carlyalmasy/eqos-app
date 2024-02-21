export default function DataGrid() {
    return (
        <>
        <div className="grid md:grid-cols-12 grid-rows-none gap-4 mt-6">
            <div className="md:col-span-6">
                <img src="https://placehold.co/600x400?text=1" />
            </div>
            <div className="md:col-span-6">
                <img src="https://placehold.co/600x400?text=2" />
            </div>
            <div className="md:col-span-6">
                <img src="https://placehold.co/600x400?text=3" />
            </div>
            <div className="md:col-span-6">
                <img src="https://placehold.co/600x400?text=4" />
            </div>
        </div>
        </>
    );
}