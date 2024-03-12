import React from "react";
import bjoin from "../../utilities/bjoin";

export default function ScoreBarGroup({ data }) {

    const overallRating = () => {
        const overallScore = data?.scores?.overall;
        if (overallScore === null ) return "unrated";
        if (overallScore <= 1.0) return "bronze";
        if (overallScore >= 1.01 && overallScore <= 2.5) return "silver";
        if (overallScore >= 2.51 && overallScore <= 4.0) return "gold";
        if (overallScore >= 4.01) return "platinum";
        return "unrated";
      }

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
                    "bg-" + overallRating() + "-300" // bg-platinum-300 bg-gold-300 bg-silver-300 bg-bronze-300 bg-unrated-300
                )}
                style={{width: `calc(100% * (${data?.scores?.details[header]})/5)`}}
            ></div>
            </div>
        </React.Fragment>
        ))}
        </div>
    )

}

