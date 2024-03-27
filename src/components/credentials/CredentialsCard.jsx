import bjoin from "../../utilities/bjoin";
import ScoreBarGroup from "../score/ScoreBarGroup";
import ScoreGauge from "../score/ScoreGauge";
import CredentialsInfo from "./CredentialsInfo";
import Card from "../Card";
import { overallRating } from "../../utilities/RatingFunctions";

export default function CredentialsCard({ data }) {
    return (
        <>
            <Card color="white">
                <div
                    className="grid grid-cols-12 grid-rows-1 hover:bg-neutrals-light-100/75"
                >
                    <div className="col-span-5 p-5">
                        <ScoreGauge data={data} textSize="sm" subtextSize="2xs" />
                        <ScoreBarGroup data={data} barHeight="3px" />
                    </div>
                    <div
                        className={bjoin(
                            "min-h-full col-span-7 col-start-6 p-5",
                            "bg-" + overallRating(data) + "-100" // bg-platinum-100 bg-gold-100 bg-silver-100 bg-bronze-100 bg-unrated-100
                        )}
                    >
                        <CredentialsInfo data={data} />
                    </div>
                </div>
            </Card>
        </>
    );
}
