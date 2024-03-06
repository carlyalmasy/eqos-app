import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import axios from "axios";
import CredentialsCard from "./CredentialsCard";
import Grid from "./layout/Grid";
import Pagination from "./Pagination";

export default function SearchResults() {
    const url = import.meta.env.VITE_CORE_URL + "/api/app/search?occupation=110";
    const items = useSignal([]);
    const currentPage = useSignal(1);
    const itemsPerPage = useSignal(9);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                items.value = response.data.data;
            })
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.value.slice(indexOfFirstItem, indexOfLastItem);
    const nPages = Math.ceil(items.value.length / itemsPerPage);
    console.log(currentItems)

    return (
        <>
            <Grid split="3" className="auto-rows-fr">
                {items.value.map((currentItems) => (
                    <CredentialsCard key={currentItems.id} data={currentItems}/>
                ))}
            </Grid>
            <div className="mt-10">
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                />
            </div>
        </>
    );
}
