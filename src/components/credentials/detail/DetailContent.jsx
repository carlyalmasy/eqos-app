// libraries / utilities
import axios from "axios";
import { signal, useSignalEffect } from "@preact/signals-react";

import bjoin from "../../../utilities/bjoin";
import debug from "../../../utilities/debug";
import { overallRating } from "../../../utilities/ratings";

//components
import { NavLink } from "react-router-dom";

import Copy from "../../actions/Copy";
import DetailBlock from "./DetailBlock";
import DetailEyebrow from "./DetailEyebrow";
import DetailInfo from "./DetailInfo";
import DetailName from "./DetailName";
import Grid from "../../layout/Grid";
import ScoreBarGroup from "../score/ScoreBarGroup";
import ScoreGauge from "../score/ScoreGauge";

const baseUrl = import.meta.env.VITE_CORE_URL;
const data    = signal({});

export default function DetailContent({ itemId, split }) {
    useSignalEffect(() => {
        debug("Getting credential details");

        axios
            .get(new URL("/api/app/detail/credentials/" + itemId, baseUrl))
            .then((response) => {
                data.value = response.data;
            })
        ;
    });

    if (!Object.keys(data.value).length) {
        return <></>;
    }

    return (
        <>
            <Grid split={split} gapSize="2">
                <div className="lg:mr-20">
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
                            href={ location.origin + "/credentials/" + itemId }
                            className="align-middle"
                            id="detail-url"
                        >
                            { location.origin + "/credentials/" + itemId }
                        </a>
                        <Copy
                            className="inline-block text-neutrals-dark-100 hover:text-neutrals-dark-500 ml-1 h-5 w-5 align-middle"
                            from="#detail-url"
                        />
                    </DetailInfo>
                </div>
                <>
                    <div className="bg-white rounded-md drop-shadow-md">
                        <div className="grid content-center w-full py-9 px-9">
                            <ScoreGauge data={data.value} textSize="2xl" subtextSize="base" />
                            <ScoreBarGroup data={data.value} barHeight="6px" />
                        </div>
                    </div>
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
