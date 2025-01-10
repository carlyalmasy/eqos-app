// libraries / utilities
import bjoin from "../../utilities/bjoin";

export default function Grid({split, gapSize, className, children}) {
    const splits = {};

    if (typeof split !== 'object') {
        split = {lg: split};
    }

    for (const size in split) {
        if (split[size].includes('/')) {
            splits[size] = split[size].split('/');
        } else {
            splits[size] = [12 / split[size]];
        }
    }

    return (
        <>
            <div className={bjoin(
                'grid grid-cols-12',
                'gap-' + gapSize, // gap-2 gap-4 gap-6 gap-8 gap-10 gap-12
                className,
            )}>
                {
                    children.map((child, i) => {
                        return (
                            <div key={i} className={
                                bjoin(
                                    'col-span-12',
                                    Object.keys(splits).map(
                                        (key) => key + ':col-span-' + splits[key][splits[key].length > 1 ? i % splits[key].length : 0]
                                    ).join(' ')
                                )
                            }>
                                { child }
                            </div>
                        )

                        // sm:col-span-2  sm:col-span-3  sm:col-span-4  sm:col-span-6  sm:col-span-8  sm:col-span-9
                        // md:col-span-2  md:col-span-3  md:col-span-4  md:col-span-6  md:col-span-8  md:col-span-9
                        // lg:col-span-2  lg:col-span-3  lg:col-span-4  lg:col-span-6  lg:col-span-8  lg:col-span-9
                        // xl:col-span-2  xl:col-span-3  xl:col-span-4  xl:col-span-6  xl:col-span-8  xl:col-span-9
                        // 2xl:col-span-2 2xl:col-span-3 2xl:col-span-4 2xl:col-span-6 2xl:col-span-8 2xl:col-span-9

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
