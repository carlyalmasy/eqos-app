import DetailEyebrow from "./DetailEyebrow";
import DetailName from "./DetailName";
import DetailInfo from "./DetailInfo";
import Card from "../Card";
import Grid from "../layout/Grid";
import ScoreGauge from "../score/ScoreGauge";
import ScoreBarGroup from "../score/ScoreBarGroup";
import DetailBlock from "./DetailBlock";
import { useSignal, useSignalEffect } from "@preact/signals-react";
import debug from "../../utilities/debug";
import axios from "axios";
import { NavLink } from "react-router-dom";
import bjoin from "../../utilities/bjoin";
import { overallRating } from "../../utilities/RatingFunctions";
import Copy from "../actions/Copy";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function DetailContent({ itemId, split }) {
    const data = useSignal({});

    useSignalEffect(() => {
        debug("Getting credential details");

        axios.get(new URL("/api/app/detail/credentials/" + itemId, baseUrl)).then((response) => {
            data.value = response.data;
        });
    });

    if (!Object.keys(data.value).length) {
        return <></>;
    }

    return (
        <>
            <Grid split={split} gapSize="2">
                <div className="mr-32">
                    <DetailBlock>
                        <DetailEyebrow>{data.value.overview.type}</DetailEyebrow>
                        <DetailName>{data.value.overview.name}</DetailName>
                    </DetailBlock>
                    {data.value.overview.description && (
                        <DetailBlock>
                            <DetailEyebrow>{"Description"}</DetailEyebrow>
                            <DetailInfo>{data.value.overview.description}</DetailInfo>
                        </DetailBlock>
                    )}
                    <DetailBlock>
                        <DetailEyebrow>{"Training Provider"}</DetailEyebrow>
                        <DetailInfo>{data.value.overview.provider.name}</DetailInfo>
                    </DetailBlock>
                    <DetailEyebrow>Copy Link to Share</DetailEyebrow>
                    <DetailInfo>
                        <a
                            href={location.origin + "/credentials/" + itemId}
                            className="align-middle"
                            id="detail-url"
                        >
                            {location.origin + "/credentials/" + itemId}
                        </a>
                        <Copy
                            className="inline-block text-neutrals-dark-100 hover:text-neutrals-dark-500 ml-1 h-5 w-5 align-middle"
                            from="#detail-url"
                        />
                    </DetailInfo>
                </div>
                <>
                    <Card color="white" borderRadius="md" dropShadow="md" marginTop="0" maxWidth="">
                        <div className="grid content-center w-full py-9 px-9">
                            <ScoreGauge data={data.value} textSize="2xl" subtextSize="base" />
                            <ScoreBarGroup data={data.value} barHeight="6px" />
                        </div>
                    </Card>
                    <div className="mt-6 text-center">
                        <NavLink
                            to="/resources"
                            className="text-eqos-400 underline pt-4 hover:no-underline hover:text-eqos-500"
                        >
                            How does EQOS determine the quality score?
                        </NavLink>
                    </div>
                </>
            </Grid>
            <div className="mt-28">
                <Grid split="2" gapSize="8">
                    {Object.keys(data.value.alignments).map((alignment) => {
                        const title = data.value.alignments[alignment];
                        return (
                            <div key={alignment}>
                                <div
                                    className={bjoin(
                                        "container h-10 rounded-full flex justify-center",
                                        overallRating(data.value) === "unrated"
                                            ? "bg-neutrals-light-100"
                                            : "bg-" + overallRating(data.value) + "-100" // bg-platinum-100 bg-gold-100 bg-silver-100 bg-bronze-100 bg-unrated-100
                                    )}
                                >
                                    <p className="text-neutrals-dark-600 text-sm leading-6">
                                        {title.title}
                                    </p>
                                </div>
                                <ol className="list-decimal list-outside my-4 ml-16">
                                    {Object.keys(title.items).map((listItem, i) => {
                                        const text = title.items[listItem];
                                        return (
                                            <li className="leading-normal" key={i}>
                                                {text.text}
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
}
