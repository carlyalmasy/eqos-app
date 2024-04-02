import React from "react";
import bjoin from "../../utilities/bjoin";

export default function CredentialsInfo({ data }) {

    return (
        <div>
            {Object.keys(data?.header).map((header, i, index) => {
                const value = data.header[header];
                return (
                    <React.Fragment key={`Header_${i}_${header}`}>
                        <p className="text-2xs leading-4 mb-0">{header}</p>
                        <p className={ bjoin(
                            "leading-5 text-neutrals-dark-600 mb-3 mt-0",
                            i == 0 ? "font-semibold text-sm" : "text-xs"
                        )}>
                            { Array.isArray(value)
                                ? value.map((value) => value.text).join(', ')
                                : value.text
                            }
                        </p>
                    </React.Fragment>
                );
            })}
        </div>
    );
}
