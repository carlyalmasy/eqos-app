import { NavLink } from "react-router-dom";
import Grid from "../components/layout/Grid";
import DetailSummary from "../components/DetailSummary";

export default function Detail() {
    return (
        <>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 my-20">
                <div className="col-span-8">
                    <DetailSummary />
                </div>
                <div className="col-span-4 col-start-9">
                    <div className="mb-6">
                        <img
                            src="https://placehold.co/600x800"
                        />
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
