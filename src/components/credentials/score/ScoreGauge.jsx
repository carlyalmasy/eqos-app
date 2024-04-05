import bjoin from "../../../utilities/bjoin";
import { ratingImageSource, overallRating, overallQuality } from "../../../utilities/RatingFunctions";

export default function ScoreGauge({ data }) {
    return (
        <div className="@container text-center relative mb-6">
            <img
                className="w-[100%] height-auto"
                src={ratingImageSource(data)}
                alt={overallRating(data)}
            />
            <div
                className={
                    overallRating(data) === "unrated"
                        ? "absolute left-2/4 -translate-x-2/4 top-3/4 -translate-y-1/4"
                        : "absolute @lg:top-3/4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-1/6 @lg:-translate-y-1/4"
                }
            >
                <p
                    className={bjoin(
                        "text-xs @[13rem]:text-xl @[17rem]:text-2xl @[21rem]:text-3xl @[25rem]:text-4xl @lg:text-5xl uppercase font-bold mb-0 mt-4 leading-none",
                        "text-" + overallRating(data) + "-500" // text-platinum-500 text-gold-500 text-silver-500 text-bronze-500 text-unrated-500
                    )}
                >
                    {overallRating(data)}
                </p>
                <p className="text-2xs @[13rem]:text-sm @[17rem]:text-base @[25rem]:text-lg @lg:text-xl mt-0 leading-tight mb-0"
                >
                    {overallQuality(data)}
                </p>
            </div>
        </div>
    );
}
