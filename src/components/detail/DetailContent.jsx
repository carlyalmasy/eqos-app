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

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function DetailContent({ itemId, split }) {
    const data = useSignal({});

    useSignalEffect(() => {
        debug('Getting credential details');

        axios
            .get(new URL("/api/app/detail/credentials/" + itemId, baseUrl))
            .then((response) => {
                data.value = response.data;
        });
    })

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
                </div>

                <>
                    <Card color={"white"}>
                        <div className="grid content-center py-3 px-9 w-full">
                            <ScoreGauge data={data.value} textSize="3xl" subtextSize="xl" />
                            <ScoreBarGroup data={data.value} barHeight="6px" />
                        </div>
                    </Card>
                    <div className="mt-6 text-center">
                        <a href="#" className="text-eqos-400 underline pt-4">
                            How does EQOS determine the quality score?
                        </a>
                    </div>
                </>
            </Grid>
            <div className="mt-28">
                <Grid split="2" gapSize="8">
                    {Object.keys(data.value.alignments).map((alignment) => {
                        const title = data.value.alignments[alignment];
                        return (
                            <div key={alignment}>
                                <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                                    <p className="text-neutrals-dark-600 text-lg leading-6">
                                        {title.title}
                                    </p>
                                </div>
                                <ol className="list-decimal list-outside my-4 ml-16">
                                    {Object.keys(title.items).map((listItem, i) => {
                                        const text = title.items[listItem];
                                        return (
                                            <li className="text-xl leading-relaxed" key={i}>
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
