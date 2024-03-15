import bjoin from "../../utilities/bjoin";
import { ratingImageSource, overallRating, overallQuality } from "../../utilities/RatingFunctions";

export default function ScoreGauge({ data, textSize, subtextSize }) {
    return (
        <div className="text-center relative mb-6">
            <img
                className="w-[100%] height-auto"
                src={ratingImageSource(data)}
                alt={overallRating(data)}
            />
            <div
                className={
                    overallRating(data) === "unrated"
                        ? "absolute left-2/4 -translate-x-2/4 top-3/4 -translate-y-1/4"
                        : "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/6"
                }
            >
                <p
                    className={bjoin(
                        "uppercase font-bold mb-0 leading-tight",
                        "text-" + textSize, // text-2xs
                        "text-" + overallRating(data) + "-300" // text-platinum-300 text-gold-300 text-silver-300 text-bronze-300 text-unrated-300
                    )}
                >
                    {overallRating(data)}
                </p>
                <p className={bjoin(
                    "mt-0 leading-tight",
                     "text-" + subtextSize
                    )}
                >
                    {overallQuality(data)}
                </p>
            </div>
        </div>
    );
}
