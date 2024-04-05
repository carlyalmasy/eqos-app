import bjoin from "../../utilities/bjoin";
import ScoreBarGroup from "../score/ScoreBarGroup";
import ScoreGauge from "../score/ScoreGauge";
import CredentialsInfo from "./CredentialsInfo";
import { overallRating } from "../../utilities/RatingFunctions";

export default function CredentialsCard({ data }) {
    return (
        <>
            <div className="md:h-full bg-white rounded-md shadow-md">
                <div
                    className={
                        overallRating(data) === "unrated"
                            ? "md:h-full w-full flex hover:shadow-lg divide-x divide-neutrals-light-300"
                            : "md:h-full w-full flex hover:shadow-lg"
                    }
                >
                    <div className="w-[180px] p-4 flex-shrink-0 flex-grow-0 space-around items-center justify-around">
                        <ScoreGauge data={data} />
                        <ScoreBarGroup data={data} barHeight="3px" />
                    </div>
                    <div
                        className={bjoin(
                            "min-h-full p-4 flex-grow",
                            "bg-" + overallRating(data) + "-100" // bg-platinum-100 bg-gold-100 bg-silver-100 bg-bronze-100
                        )}
                    >
                        <CredentialsInfo data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}
