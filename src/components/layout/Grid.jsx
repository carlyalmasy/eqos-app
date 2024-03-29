import bjoin from "../../utilities/bjoin";

export default function Grid({split, gapSize, className, children}) {

    const splits = split.includes('/')
        ? split.split('/')
        : [12 / split];

    return (
        <>
            <div className={bjoin(
                'grid md:grid-cols-12',
                'gap-' + gapSize, // gap-2 gap-4 gap-6 gap-8
                className,
            )}>
                {
                    children.map((child, key) => {
                        return (
                            <div key={key} className={ bjoin(
                                'md:col-span-6 lg:col-span-' + splits[splits.length > 1 ? key % splits.length : 0])
                                // md:col-span-2 md:col-span-4 md:col-span-3 md:col-span-6 md:col-span-9
                                // col-span-2 col-span-4 col-span-3 col-span-6 col-span-9
                            }>
                                { child }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

Grid.defaultProps = {
    gapSize: '4',
    className: 'mt-6'
};
