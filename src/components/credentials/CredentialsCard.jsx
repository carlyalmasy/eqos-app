import bjoin from "../../utilities/bjoin";
import ScoreBarGroup from "../score/ScoreBarGroup";
import ScoreGauge from "../score/ScoreGauge";
import CredentialsInfo from "./CredentialsInfo";
import Card from "../Card";
import { overallRating } from "../../utilities/RatingFunctions";

export default function CredentialsCard({ data }) {
    return (
        <>
            <Card color="white" maxWidth="" borderRadius="md" dropShadow="md" marginTop="0" //max-w-[500px] border-md drop-shadow-md mt-0
            >
                <div
                    className="w-full flex hover:bg-neutrals-light-100/75"
                >
                    <div className="w-[180px] p-4 flex-shrink-0 flex-grow-0">
                        <ScoreGauge data={data} textSize="xs" subtextSize="2xs" />
                        <ScoreBarGroup data={data} barHeight="3px" />
                    </div>
                    <div
                        className={bjoin(
                            "min-h-full p-4 flex-grow",
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
