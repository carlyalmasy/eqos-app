import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import Grid from "../components/layout/Grid";
import DetailSummary from "../components/DetailSummary";
import ScoreGauge from "../components/ScoreGauge";

export default function Detail({data}) {

    const url = import.meta.env.VITE_CORE_URL + "/api/app/detail/credentials/510955";
    const items = useSignal([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                items.value = response.data.data;
            })
    }, []);

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 my-20">
                <div className="col-span-8">
                    <DetailSummary />
                </div>
                <div className="col-span-4 col-start-9">
                    <div className="mb-6">
                        <ScoreGauge data={items} />
                    </div>
                    <a
                        href="#"
                        className="text-eqos-400 underline pt-4"
                    >
                        How does EQOS determine the quality score?
                    </a>
                </div>
            </div>
            <Grid split="2">
                <div>
                    <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                        <p className="text-neutrals-dark-600 text-lg leading-6">Top 10 Aligned Skills</p>
                    </div>
                    <div className="ml-10 mt-4">
                        <ol className="list-decimal text-xl">
                            <li>Medical Prescription</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className="container bg-platinum-100">
                    </div>
                </div>
            </Grid>
        </>
    )
}
