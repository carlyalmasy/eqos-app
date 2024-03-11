import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import axios from "axios";
import Grid from "../components/layout/Grid";
import DetailSummary from "../components/DetailSummary";
import ScoreGauge from "../components/ScoreGauge";
import Card from "../components/Card";
import ScoreBarGroup from "../components/ScoreBarGroup";
import DetailListGroup from "../components/lists/DetailListGroup";

export default function Detail() {

    const url = import.meta.env.VITE_CORE_URL + "/api/app/detail/credentials/510955";
    const items = useSignal([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                items.value = response.data;
            })
    }, []);

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 my-20">
                <div className="col-span-9">
                    <DetailSummary />
                </div>
                <div className="col-span-3 col-start-10">
                        <div className="mb-6">
                            <ScoreGauge data={items} />
                            {/* <ScoreBarGroup data={items} /> */}
                        </div>
                    <div className="mt-6 text-center">
                        <a
                            href="#"
                            className="text-eqos-400 underline pt-4"
                        >
                            How does EQOS determine the quality score?
                        </a>
                    </div>
                </div>
            </div>
            <Grid split="2">
                <DetailListGroup />
                <DetailListGroup />
            </Grid>
        </>
    )
}
