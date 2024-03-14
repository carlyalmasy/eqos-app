import bjoin from "../../utilities/bjoin";

export default function Grid({split, children, gapSize}) {
    return (
        <>
            <div className={bjoin(
                "grid md:grid-cols-12 mt-6 gap-" + gapSize
            )}>
                {
                    children.map((child, key) => {
                        return (
                            <div key={key} className={ bjoin('md:col-span-' + 12 / split) }>
                                { child }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
