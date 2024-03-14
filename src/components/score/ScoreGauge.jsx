import bronzeOne from "../../assets/images/gauges/bronze-1.svg"
import bronzeTwo from "../../assets/images/gauges/bronze-2.svg";
import silverOne from "../../assets/images/gauges/silver-1.svg";
import silverTwo from "../../assets/images/gauges/silver-2.svg";
import silverThree from "../../assets/images/gauges/silver-3.svg";
import goldOne from "../../assets/images/gauges/gold-1.svg";
import goldTwo from "../../assets/images/gauges/gold-2.svg";
import goldThree from "../../assets/images/gauges/gold-3.svg";
import platinumOne from "../../assets/images/gauges/platinum-1.svg";
import platinumTwo from "../../assets/images/gauges/platinum-2.svg";
import unrated from "../../assets/images/gauges/unrated.svg";
import bjoin from "../../utilities/bjoin";
import { ratingImageSource, overallRating, overallQuality } from "../../utilities/RatingFunctions";

export default function ScoreGauge({ data }) {
    return (
        <div className="text-center relative mb-6">
            <img className="w-[100%] height-auto" src={ ratingImageSource(data) } alt={overallRating(data)} />
            <div className={
                overallRating(data) === "unrated"
                    ? "absolute left-2/4 -translate-x-2/4 top-3/4 -translate-y-1/4"
                    : "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/6"
                }
            >
                <p
                    className={bjoin(
                        "uppercase font-bold mb-0 leading-tight text-sm",
                        "text-" + overallRating(data) + "-300" // text-platinum-300 text-gold-300 text-silver-300 text-bronze-300 text-unrated-300
                    )}
                >
                    {overallRating(data)}
                </p>
                <p className="mt-0 leading-tight text-2xs">{ overallQuality(data) }</p>
            </div>
        </div>
    );
}
