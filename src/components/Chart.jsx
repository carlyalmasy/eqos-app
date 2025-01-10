export default function Chart({ data }) {
    return (
        <>
            <div>
                <div className="container bg-silver-100 h-6 rounded-full flex items-center justify-center">
                    <p className="text-neutrals-dark-600 text-2xs font-semibold uppercase">
                        {data.overview.header}
                    </p>
                </div>
                <div className="my-4">
                    <p className="text-neutrals-dark-600 text-xs leading-snug">
                        {data.overview.description}
                    </p>
                </div>
                <div>
                    {Object.keys(data.items).map((item, i) => {
                        const total = data.items[item];
                        return (
                            <div key={i}>
                                <div className="flex items-center">
                                    <p className="text-neutrals-dark-600 text-2xs leading-none text-right mr-1 shrink-0 w-[150px]">
                                        {item}
                                    </p>
                                    <div
                                        className="bg-eqos-400 h-4 relative"
                                        style={{
                                            width: `calc(100% * (${total}) / (${data.max}) - 154px`,
                                        }}
                                    >
                                        <div className="h-4 right-1 text-white text-2xs absolute">
                                            {total.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-center mt-1">
                    <div className="bg-eqos-400 h-3 w-2.5 mr-1"></div>
                    <p className="text-neutrals-dark-600 text-2xs leading-snug">
                        {data.overview.legend}
                    </p>
                </div>
            </div>
        </>
    );
}
