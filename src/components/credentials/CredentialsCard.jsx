import { useState } from "react";
import bjoin from "../../utilities/bjoin";
import ScoreBarGroup from "../score/ScoreBarGroup";
import ScoreGauge from "../score/ScoreGauge";
import CredentialsInfo from "./CredentialsInfo";
import Card from "../Card";
import { overallRating } from "../../utilities/RatingFunctions";
import handleClick from "../search/SearchResults";

export default function CredentialsCard({ data, handleClick }) {

    const [itemID, setItemID] = useState(null);


    function handleClick() {
        setItemID(data.id);
        // openModal(true);
        console.log(data.id);
    }

    return (
        <>
            <Card color="white">
                <div
                    onClick={ handleClick }
                    className="grid grid-cols-12 grid-rows-1 hover:bg-neutrals-light-100/75"
                >
                    <div className="col-span-5 p-6">
                        <ScoreGauge data={data} textSize="sm" subtextSize="2xs" />
                        <ScoreBarGroup data={data} barHeight="3px" />
                    </div>
                    <div
                        className={bjoin(
                            "min-h-full col-span-7 col-start-6 p-6",
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
