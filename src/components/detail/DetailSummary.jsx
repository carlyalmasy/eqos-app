import React from "react";
import DetailHeader from "./DetailHeader";
import DetailName from "./DetailName"
import DetailInfo from "./DetailInfo";

export default function DetailSummary() {
    return (
        <div className="mr-36">
            <div className="mb-8">
                <DetailHeader item="Program Category" />
                <DetailName name="Program Category" />
            </div>
            <div className="mb-8">
                <DetailHeader item="Description" />
                <DetailInfo text="Description" />
            </div>
            <div className="mb-8">
            <DetailHeader item="Provider" />
                <DetailInfo text="Provider" />
            </div>
        </div>
    );
}
