import React from "react";

export default function CredentialsInfo({ data }) {
    return (
        <div>
            {Object.keys(data.header).map((header, i, index) => {
                const value = data.header[header];
                return (
                    <React.Fragment key={`Header_${i}_${header}`}>
                        <p className={index === 0 ? "text-2sx" : "mb-0"}>{header}</p>
                        {Array.isArray(value) ? (
                            value.map((el, index) => (
                                <span
                                    className="text-neutrals-dark-600 leading-tight mt-1"
                                    key={index}
                                >
                                    {(index ? ", " : "") + el.text}
                                </span>
                            ))
                        ) : (
                            <p className="text-neutrals-dark-600 leading-tight mt-1">
                                {value.text}
                            </p>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
