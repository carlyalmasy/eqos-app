import React from "react";
import bjoin from "../utilities/bjoin";
import ScoreBar from "./ScoreBarGroup";
import ScoreGauge from "./ScoreGauge";
import CredentialsInfo from "./CredentialsInfo";

export default function CredentialsCard({ data }) {

      const overallRating = () => {
        const overallScore = data.scores.overall;
        if (overallScore === null ) return "unrated";
        if (overallScore <= 1.0) return "bronze";
        if (overallScore >= 1.01 && overallScore <= 2.5) return "silver";
        if (overallScore >= 2.51 && overallScore <= 4.0) return "gold";
        if (overallScore >= 4.01) return "platinum";
        return "unrated";
      }

  return (
    <>
        <div className="container rounded-lg bg-white drop-shadow-md z-0">
          <div className="grid grid-cols-12 grid-rows-1">
            <div className="col-span-5 p-6">
                <ScoreGauge data={data} />
                <ScoreBar data={ data }/>
            </div>
            <div
                className={bjoin(
                    "col-span-7 col-start-6 p-6",
                    "bg-" + overallRating() + "-100" // bg-platinum-100 bg-gold-100 bg-silver-100 bg-bronze-100 bg-unrated-100
                )}
            >
            <CredentialsInfo data={data} />
            </div>
          </div>
        </div>
    </>
  );
}
