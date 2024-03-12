import React from "react";
import DetailName from "./DetailName";
import DetailInfo from "./DetailInfo";

export default function DetailSummary({ data }) {
    return (
        <div>
            <div className="mb-8">
                <p className="text-lg">Program Category</p>
                <p className="text-5xl text-neutrals-dark-600 font-semibold">
                    Data Entry/Micro Computer Application
                </p>
            </div>
            <div className="mb-8">
                <p className="text-lg">Description</p>
                <p className="text-2xl text-neutrals-dark-600">
                    Instructional programs that focus on the computer and information sciences and
                    prepare individuals for various occupations in information technology and
                    computer operations fields.
                </p>
            </div>
            <div className="mb-8">
                <p className="text-lg">Provider</p>
                <p className="text-2xl text-neutrals-dark-600">edX</p>
            </div>
        </div>
    );
}
