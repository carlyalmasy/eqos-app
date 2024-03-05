import { useEffect, useState } from "react";
import { useSignal } from "@preact/signals-react";
import axios from "axios";
import CredentialsCard from "./CredentialsCard";
import Grid from "./layout/Grid";
import React from "react";
import Pagination from "./pagination";

export default function SearchResults() {
    const url = import.meta.env.VITE_CORE_URL + "/api/app/search?occupation=110&l=30";
    const items = useSignal([]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = useSignal(9);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                items.value = response.data.data;
                setData(response.data.data);
                setLoading(false);
            })
            .catch(() => {
                alert("Error");
            });
    }, []);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage);
    console.log(currentRecords)

    return (
        <>
            <Grid split="3" className="auto-rows-fr">
                {items.value.map((data) => (
                    <CredentialsCard key={data.id} data={data}/>
                ))}
            </Grid>
            <div className="mt-10">
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    );
}
