import DetailListHeader from "./DetailListHeader";
import DetailListItem from "./DetailListItem";
import Grid from "../layout/Grid";

export default function DetailListGroup({ items }) {
    return (
        <>
            <Grid split="2">
                {/* <div>
                    <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                        <p className="text-neutrals-dark-600 text-lg leading-6">
                            Top 5 Aligned Skills
                        </p>
                    </div>
                    <ol className="list-decimal list-inside pl-10 pt-6 leading-loose text-xl">
                        <li>Six Sigma Methodology</li>
                        <li>Lean Manufacturing</li>
                        <li>Microsoft Excel</li>
                        <li>Data Analysis</li>
                        <li>Management</li>
                    </ol>
                </div>
                <div>
                    <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                        <p className="text-neutrals-dark-600 text-lg leading-6">
                            Top 5 Aligned Occupations
                        </p>
                    </div>
                    <ol className="list-decimal list-inside pl-10 pt-6 leading-loose text-xl">
                        <li>Industrial Engineers</li>
                        <li>Management Analysts</li>
                        <li>Software Developers</li>
                        <li>Logisticians</li>
                        <li>Teaching Assistants, Postsecondary</li>
                    </ol>
                </div>
                <div>
                    <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                        <p className="text-neutrals-dark-600 text-lg leading-6">
                            Top 5 Aligned Titles
                        </p>
                    </div>
                    <ol className="list-decimal list-inside pl-10 pt-6 leading-loose text-xl">
                        <li>Quality Engineers</li>
                        <li>Manufacturing Engineers</li>
                        <li>Industrial Engineers</li>
                        <li>Process Engineers</li>
                        <li>Manufacturing Process Engineers</li>
                    </ol>
                </div> */}

                {Object.keys(items?.value).map((data, i, index) => {
                    return (
                        <>
                            <div key={i}>
                                <div className="container bg-platinum-100 h-10 rounded-full flex justify-center">
                                    <p className="text-neutrals-dark-600 text-lg leading-6">
                                        {data}
                                    </p>
                                </div>
                            </div>
                        </>
                    );
                })}
            </Grid>
        </>
    );
}
