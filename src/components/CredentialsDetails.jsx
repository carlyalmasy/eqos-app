import bjoin from "../utilities/bjoin";
import React from "react";

export default function CredentialsDetails({ data }) {

    const overallRating = () => {
      const overallScore = data?.scores?.overall;

      if (overallScore === null ) return "unrated";
      if (overallScore <= 1.0) return "bronze";
      if (overallScore >= 1.01 && overallScore <= 2.5) return "silver";
      if (overallScore >= 2.51 && overallScore <= 4.0) return "gold";
      if (overallScore >= 4.01) return "platinum";
      return "Unrated";
    }

    return (
      <>
        <div
        className={bjoin(
        "col-span-6 col-start-7 p-6 bg-" + overallRating + "-100"
        )}
        >
        {Object.keys(data?.header).map((header, i) => {
        const value = data?.header[header];

        return (
            <React.Fragment key={`Header_${i}_${header}`}>
            <p className="mb-0">{header}</p>
            {Array.isArray(value) ? (
                value.map((el) => (
                <span
                    key={el?.text}
                    className="text-neutrals-dark-600 leading-tight mt-1"
                >
                    {el?.text}
                </span>
                ))
            ) : (
                <p className="text-neutrals-dark-600 leading-tight mt-1">
                {value?.text}
                </p>
            )}
            </React.Fragment>
        );
        })}
        </div>
    </>
  );
}
