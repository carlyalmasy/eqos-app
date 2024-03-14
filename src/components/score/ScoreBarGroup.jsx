import React from "react";
import bjoin from "../../utilities/bjoin";
import { overallRating } from "../../utilities/RatingFunctions";

export default function ScoreBarGroup({ data }) {
    return (
        <div>
        {Object.keys(data?.scores?.details).map((header, i) => (
        <React.Fragment key={i}>
            <p className="mb-0">
            <span className={
                data?.scores?.details[header] !== null
                    ? "font-bold text-neutrals-dark-600"
                    : ""
                }
            >
                { data?.scores?.details[header] !== null
                    ? Math.round((data?.scores?.details[header] / 5) * 100)
                    : "-"
                }
            </span>{" "}
            {header}
            </p>
            <div className="border border-neutrals-light-500 w-[100%]">
            <div
                className={bjoin(
                    "h-[2px]",
                    "bg-" + overallRating(data) + "-300" // bg-platinum-300 bg-gold-300 bg-silver-300 bg-bronze-300 bg-unrated-300
                )}
                style={{width: `calc(100% * (${data?.scores?.details[header]})/5)`}}
            ></div>
            </div>
        </React.Fragment>
        ))}
        </div>
    )

}

