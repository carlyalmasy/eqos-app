import DetailEyebrow from "./DetailEyebrow";
import DetailName from "./DetailName";
import DetailInfo from "./DetailInfo";
import Card from "../Card";
import Grid from "../layout/Grid";
import ScoreGauge from "../score/ScoreGauge";
import ScoreBarGroup from "../score/ScoreBarGroup";
import DetailBlock from "./DetailBlock";

export default function DetailContent({ data, split }) {
    return (
        <>
            <Grid className="my-20" split={split} gapSize="2">
                <div className="mr-32">
                    <DetailBlock>
                        <DetailEyebrow>{data.overview.type}</DetailEyebrow>
                        <DetailName>{data.overview.name}</DetailName>
                    </DetailBlock>
                    {data.overview.description && (
                        <DetailBlock>
                            <DetailEyebrow>{"Description"}</DetailEyebrow>
                            <DetailInfo>{data.overview.description}</DetailInfo>
                        </DetailBlock>
                    )}
                    <DetailBlock>
                        <DetailEyebrow>{"Training Provider"}</DetailEyebrow>
                        <DetailInfo>{data.overview.provider.name}</DetailInfo>
                    </DetailBlock>
                </div>

                <>
                    <Card color={"white"}>
                        <div className="grid content-center py-3 px-9">
                            <ScoreGauge data={data} textSize="3xl" subtextSize="xl" />
                            <ScoreBarGroup data={data} barHeight="6px" />
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
                    {Object.keys(data.alignments).map((alignment) => {
                        const title = data.alignments[alignment];
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
