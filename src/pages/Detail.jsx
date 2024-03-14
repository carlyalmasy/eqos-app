import { useSignal } from "@preact/signals-react";
import { useLayoutEffect } from "react";
import axios from "axios";
import debug from "../utilities/debug";
import DetailEyebrow from "../components/detail/DetailEyebrow";
import DetailName from "../components/detail/DetailName";
import DetailInfo from "../components/detail/DetailInfo";
import Card from "../components/Card";
import ScoreGauge from "../components/score/ScoreGauge";
import ScoreBarGroup from "../components/score/ScoreBarGroup";
import DetailListGroup from "../components/detail/DetailListGroup";
import DetailBlock from "../components/detail/DetailBlock";
import DetailHeader from "../components/detail/DetailHeader";

export default function Detail() {
    const url  = import.meta.env.VITE_CORE_URL + "/api/app/detail/credentials/510955";
    const item = useSignal({});

    useLayoutEffect(() => {
        debug("Getting result");
        axios.get(url).then((response) => {
            item.value = response.data;
            console.log(response.data);
        });
    }, []);

    if (!Object.keys(item.value).length) {
        return <></>;
    }

    return (
        <>
            <DetailHeader>
                <div className="mr-36">
                    <DetailBlock>
                        <DetailEyebrow>
                            { item.value.overview.type }
                        </DetailEyebrow>
                        <DetailName>
                            { item.value.overview.name }
                        </DetailName>
                    </DetailBlock>
                    { item.value.overview.description &&
                        <DetailBlock>
                            <DetailEyebrow>
                                { 'Description' }
                            </DetailEyebrow>
                            <DetailInfo>
                                { item.value.overview.description }
                            </DetailInfo>
                        </DetailBlock>
                    }
                    <DetailBlock>
                        <DetailEyebrow>
                            { 'Provider' }
                        </DetailEyebrow>
                        <DetailInfo>
                            { item.value.overview?.provider.name }
                        </DetailInfo>
                    </DetailBlock>
                </div>

                <>
                    <Card color={"white"}>
                        <ScoreGauge data={ item.value } />
                        <ScoreBarGroup data={ item.value } />
                    </Card>
                    <div className="mt-6 text-center">
                        <a href="#" className="text-eqos-400 underline pt-4">
                            How does EQOS determine the quality score?
                        </a>
                    </div>
                </>
            </DetailHeader>
            <div className="mt-28">
            </div>
        </>
    );
}
