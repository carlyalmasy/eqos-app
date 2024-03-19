import { useSignal } from "@preact/signals-react";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import debug from "../utilities/debug";
import DetailEyebrow from "../components/detail/DetailEyebrow";
import DetailName from "../components/detail/DetailName";
import DetailInfo from "../components/detail/DetailInfo";
import Card from "../components/Card";
import Grid from "../components/layout/Grid";
import ScoreGauge from "../components/score/ScoreGauge";
import ScoreBarGroup from "../components/score/ScoreBarGroup";
import DetailBlock from "../components/detail/DetailBlock";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function Detail() {
    const item = useSignal({});
    const { id } = useParams();

    useLayoutEffect(() => {
        debug("Getting result");
        axios
            .get(new URL('/api/app/detail/credentials/' + id, baseUrl))
            .then((response) => {
                item.value = response.data;
        });
    }, [id]);

    if (!Object.keys(item.value).length) {
        return <></>;
    }

    return (
        <>
            <Grid className="my-20" split="8/4" gapSize="2">
                <div className="mr-32">
                    <DetailBlock>
                        <DetailEyebrow>{item.value.overview.type}</DetailEyebrow>
                        <DetailName>{item.value.overview.name}</DetailName>
                    </DetailBlock>
                    {item.value.overview.description && (
                        <DetailBlock>
                            <DetailEyebrow>{"Description"}</DetailEyebrow>
                            <DetailInfo>{item.value.overview.description}</DetailInfo>
                        </DetailBlock>
                    )}
                    <DetailBlock>
                        <DetailEyebrow>{"Training Provider"}</DetailEyebrow>
                        <DetailInfo>{item.value.overview.provider.name}</DetailInfo>
                    </DetailBlock>
                </div>

                <>
                    <Card color={"white"}>
                        <div className="grid content-center py-3 px-9">
                            <ScoreGauge data={item.value} textSize="3xl" subtextSize="xl" />
                            <ScoreBarGroup data={item.value} barHeight="6px" />
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
                    {Object.keys(item.value.alignments).map((alignment) => {
                        const title = item.value.alignments[alignment];
                        return (
                            <div>
                                <div
                                    key={alignment}
                                    className="container bg-platinum-100 h-10 rounded-full flex justify-center"
                                >
                                    <p className="text-neutrals-dark-600 text-lg leading-6">
                                        {title.title}
                                    </p>
                                </div>
                                <ol className="list-decimal list-inside my-4 ml-10">
                                    {Object.keys(title.items).map((listItem, i) => {
                                        const text = title.items[listItem];
                                        return (
                                            <li
                                                className="text-xl leading-relaxed"
                                                key={i}>
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
