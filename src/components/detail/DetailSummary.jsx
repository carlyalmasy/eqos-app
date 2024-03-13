import React from "react";
import DetailName from "./DetailName";
import DetailInfo from "./DetailInfo";

export default function DetailSummary() {
    return (
        <div className="mr-36">
            <div className="mb-8">
                <p className="text-lg">Program Category</p>
                <p className="text-5xl text-neutrals-dark-600 font-semibold">
                    Six Sigma/Lean Six Sigma and Related Methods
                </p>
            </div>
            <div className="mb-8">
                <p className="text-lg">Description</p>
                <p className="text-2xl text-neutrals-dark-600">
                    Six Sigma’s emphasis is on improving existing capabilities. Six Sigma is a set of structured methodologies, problem-solving tools, and advanced statistical methods for analyzing and improving processes, product designs, and services on a broad range of metrics, especially cost, quality, time, and variability. It moves beyond treating symptoms and short-term problems to the elimination of root causes, thereby emphasizing lasting improvement.
                </p>
            </div>
            <div className="mb-8">
                <p className="text-lg">Provider</p>
                <p className="text-2xl text-neutrals-dark-600">San Jose State University</p>
            </div>
        </div>
    );
}
