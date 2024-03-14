import bjoin from "../../utilities/bjoin";
import { overallRating } from "../../utilities/RatingFunctions";

export default function ScoreBar({ data }) {
    return (
        <div className="border border-neutrals-light-500 w-[100%]">
            <div
                className={bjoin(
                    "h-[6px]",
                    "bg-" + overallRating(data) + "-300" // bg-platinum-300 bg-gold-300 bg-silver-300 bg-bronze-300 bg-unrated-300
                )}
                style={{width: `calc(100% * (${data?.scores?.details[header]})/5)`}}
            >
            </div>
        </div>
    )
}
