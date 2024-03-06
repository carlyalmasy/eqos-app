import React from "react";
import bronzeOne from "../assets/images/gauges/bronze-1.svg";
import bronzeTwo from "../assets/images/gauges/bronze-2.svg";
import silverOne from "../assets/images/gauges/silver-1.svg";
import silverTwo from "../assets/images/gauges/silver-2.svg";
import silverThree from "../assets/images/gauges/silver-3.svg";
import goldOne from "../assets/images/gauges/gold-1.svg";
import goldTwo from "../assets/images/gauges/gold-2.svg";
import goldThree from "../assets/images/gauges/gold-3.svg";
import platinumOne from "../assets/images/gauges/platinum-1.svg";
import platinumTwo from "../assets/images/gauges/platinum-2.svg";
import unrated from "../assets/images/gauges/unrated.svg";
import bjoin from "../utilities/bjoin";

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

      const overallQuality  = () => {
        const overallScore = data.scores.overall;
        if (overallScore === null ) return "";
        return "Overall Quality";
      }

      const ratingImageSource = () => {
        const overallScore = data.scores.overall;
        if (overallScore === null) return unrated;
        if (overallScore <= 0.5) return bronzeOne;
        if (overallScore >= 0.51 && overallScore <= 1.0) return bronzeTwo;
        if (overallScore >= 1.01 && overallScore <= 1.5) return silverOne;
        if (overallScore >= 1.51 && overallScore <= 2.0) return silverTwo;
        if (overallScore >= 2.01 && overallScore <= 2.5) return silverThree;
        if (overallScore >= 2.51 && overallScore <= 3.0) return goldOne;
        if (overallScore >= 3.01 && overallScore <= 3.5) return goldTwo;
        if (overallScore >= 3.51 && overallScore <= 4.0) return goldThree;
        if (overallScore >= 4.01 && overallScore <= 4.5) return platinumOne;
        if (overallScore >= 4.51 && overallScore <= 5.0) return platinumTwo;
        return unrated;
      }

  return (
    <>
        <div className="container rounded-lg bg-white drop-shadow-md z-0">
          <div className="grid grid-cols-12 grid-rows-1">
            <div className="col-span-5 p-6">
              <div className="text-center relative mb-6">
                <img
                  className="w-[100%] height-auto"
                  src={ratingImageSource()}
                  alt={overallRating()}
                />
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/6">
                  <p
                    className={bjoin(
                        "uppercase font-bold mb-0 leading-tight text-sm",
                        "text-" + overallRating() + "-300" // text-platinum-300 text-gold-300 text-silver-300 text-bronze-300 text-unrated-300
                    )}
                  >
                    {overallRating()}
                  </p>
                  <p className="mt-0 leading-tight text-2xs">{overallQuality()}</p>
                </div>
            </div>
              <div>
                {Object.keys(data.scores.details).map((header, i) => (
                  <React.Fragment key={i}>
                    <p className="mb-0">
                      <span className="font-bold text-neutrals-dark-600">
                        {Math.round((data.scores.details[header] / 5) * 100)}
                      </span>{" "}
                      {header}
                    </p>
                    <div className="border border-neutrals-light-500 w-[100%]">
                      <div
                        className={bjoin(
                            "h-[2px]",
                            "bg-" + overallRating() + "-300" // bg-platinum-300 bg-gold-300 bg-silver-300 bg-bronze-300 bg-unrated-300
                        )}
                        style={{width: `calc(100% * (${data.scores.details[header]})/5)`}}
                      ></div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div
                className={bjoin(
                    "col-span-7 col-start-6 p-6",
                    "bg-" + overallRating() + "-100" // bg-platinum-100 bg-gold-100 bg-silver-100 bg-bronze-100 bg-unrated-100
                )}
            >
              {Object.keys(data.header).map((header, i, index) => {
                const value = data.header[header];
                return (
                  <React.Fragment key={`Header_${i}_${header}`}>
                    <p className={index === 0 ? "text-2sx" : "mb-0"}>{header}</p>
                    {Array.isArray(value) ? (
                      value.map((el, index) => (
                        <span
                            className="text-neutrals-dark-600 leading-tight mt-1"
                            key={index}>
                            {(index ? ', ' : '') + el.text}
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
          </div>
        </div>
    </>
  );
}
