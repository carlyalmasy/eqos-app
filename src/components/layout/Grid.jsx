import bjoin from "../../utilities/bjoin";

export default function Grid({split, children}) {
    return (
        <>
            <div className="grid md:grid-cols-12 grid-rows-none gap-4 mt-6">
                {
                    children.map((child) => {
                        return (
                            <div className={ bjoin('md:col-span-' + 12 / split) }>
                                { child }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}