export default function DetailHeader({ children }) {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 my-20">
                <div className="col-span-9">
                    { children[0] }
                </div>
                <div className="col-span-3">
                    { children[1] }
                </div>
            </div>
        </>
    );
}

