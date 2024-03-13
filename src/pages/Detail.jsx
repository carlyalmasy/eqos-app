import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import axios from "axios";
import debug from "../utilities/debug";
import Grid from "../components/layout/Grid";
import DetailSummary from "../components/detail/DetailSummary";
import ScoreGauge from "../components/score/ScoreGauge";
import Card from "../components/Card";
import ScoreBarGroup from "../components/score/ScoreBarGroup";
import DetailListGroup from "../components/detail/DetailListGroup";
import DetailResults from "../components/detail/DetailResults";
import goldThree from "../assets/images/gauges/gold-3.svg";

export default function Detail() {
    const url = import.meta.env.VITE_CORE_URL + "/api/app/detail/credentials/510955";
    const items = useSignal([]);

    useEffect(() => {
        debug("Getting result");
        axios.get(url).then((response) => {
            items.value = response.data;
        });
    }, []);

    console.log(items?.value.id);
    console.log(items.value.alignments);
    console.log(Object.keys(items.value));
    console.log(items?.value?.type);

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 my-20">
                <div className="col-span-9">
                    <DetailSummary />
                </div>
                <div className="col-span-3 col-start-10">
                    <Card>
                        {" "}
                        <div className="mt-6">
                            <img
                                className="w-[100%] height-auto"
                                src={goldThree}
                                alt="Platinum Tier One"
                            />
                            <div className="absolute top-1/4 left-2/4 -translate-x-2/4 -translate-y-1/4">
                                <p className="uppercase font-bold text-gold-400 mb-0 leading-tight text-3xl text-center">
                                    Gold
                                </p>
                                <p className="mt-0 leading-tight text-sm text-center">
                                    Overall Quality
                                </p>
                            </div>
                            <div className="mt-10">
                                <p className="mb-0">
                                    <span className="font-bold text-neutrals-dark-600">87</span>{" "}
                                    Employment
                                </p>
                                <div className="border border-neutrals-light-500 w-[100%]">
                                    <div className="bg-gold-300 h-[5px] w-[87%]"></div>
                                </div>
                                <p className="mb-0">
                                    <span className="font-bold text-neutrals-dark-600">64</span>{" "}
                                    Opportunity
                                </p>
                                <div className="border border-neutrals-light-500 w-[100%]">
                                    <div className="bg-gold-300 h-[5px] w-[64%]"></div>
                                </div>
                                <p className="mb-0">
                                    <span className="font-bold text-neutrals-dark-600">60</span>{" "}
                                    Learnings
                                </p>
                                <div className="border border-neutrals-light-500 w-[100%]">
                                    <div className="bg-gold-300 h-[5px] w-[60%]"></div>
                                </div>
                                <p className="mb-0">
                                    <span className="font-bold text-neutrals-dark-600">25</span>{" "}
                                    Access
                                </p>
                                <div className="border border-neutrals-light-500 w-[100%]">
                                    <div className="bg-gold-300 h-[5px] w-[25%]"></div>
                                </div>
                                <p className="mb-0">
                                    <span className="font-bold text-neutrals-dark-600">60</span>{" "}
                                    Demand
                                </p>
                                <div className="border border-neutrals-light-500 w-[100%]">
                                    <div className="bg-gold-300 h-[5px] w-[60%]"></div>
                                </div>
                            </div>
                            {/* <ScoreGauge data={items} /> */}
                            {/* <ScoreBarGroup data={items} /> */}
                        </div>
                    </Card>
                    <DetailResults data={items} />
                    <div className="mt-6 text-center">
                        <a href="#" className="text-eqos-400 underline pt-4">
                            How does EQOS determine the quality score?
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-28">
                <DetailListGroup items={items} />
            </div>
        </>
    );
}
