import React from "react";

export default function CredentialsInfo({ data }) {

    return (
        <div>
            {Object.keys(data?.header).map((header, i, index) => {
                const value = data.header[header];
                return (
                    <React.Fragment key={`Header_${i}_${header}`}>
                        <p className="text-2xs leading-none mb-0">{header}</p>
                        {Array.isArray(value) ? (
                            value.map((el, index) => (
                                <span
                                    key={index}
                                    className="text-neutrals-dark-600 text-xs mb-3 mt-0"
                                >
                                    {(index ? ", " : "") + el.text}
                                </span>
                            ))
                        ) : (
                            <p className={
                                i === 0
                                ? "text-neutrals-dark-600 font-semibold text-sm mb-3 mt-0"
                                : "text-neutrals-dark-600 text-xs mb-3 mt-0"
                                }
                            >
                                {value.text}
                            </p>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
