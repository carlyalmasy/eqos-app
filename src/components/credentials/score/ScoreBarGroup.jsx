import React from "react";
import bjoin from "../../../utilities/bjoin";
import { overallRating } from "../../../utilities/RatingFunctions";

export default function ScoreBarGroup({ data, barHeight }) {
    return (
        <div className="@container">
            {Object.keys(data?.scores?.details).map((header, i) => (
                <React.Fragment key={i}>
                    <p className="leading-3 text-2xs @[17.5rem]:text-sm mb-1">
                        <span
                            className={
                                data?.scores?.details[header] !== null
                                    ? "leading-3 font-bold text-neutrals-dark-600 text-xs @[17.5rem]:text-base"
                                    : ""
                            }
                        >
                            {data?.scores?.details[header] !== null
                                ? Math.round((data?.scores?.details[header] / 5) * 100)
                                : "-"}
                        </span>{" "}
                        {header}
                    </p>
                    <div className="pb-2">
                        {" "}
                        <div className="border border-neutrals-light-500 w-[100%]">
                            <div
                                className={bjoin(
                                    "h-[" + barHeight + "]", // h-[3px] h-[6px]
                                    "bg-" + overallRating(data) + "-300" // bg-platinum-300 bg-gold-300 bg-silver-300 bg-bronze-300 bg-unrated-300
                                )}
                                style={{
                                    width: `calc(100% * (${data?.scores?.details[header]})/5)`,
                                }}
                            ></div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
