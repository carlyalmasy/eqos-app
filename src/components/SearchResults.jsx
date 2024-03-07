import { useEffect } from "react";
import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import axios from "axios";
import CredentialsCard from "./CredentialsCard";
import Grid from "./layout/Grid";
import Pagination from "./Pagination";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function SearchResults() {
    const url = import.meta.env.VITE_CORE_URL + "/api/app/search?occupation=110";
    const items = useSignal([]);
    const meta = useSignal({});
    const currentPage = useSignal(1);

    useSignalEffect(() => {
        const params = new URLSearchParams(window.location.search);

        params.set('p', currentPage.value);

        axios
            .get(new URL('/api/app/search?' + params, baseUrl))
            .then((response) => {
                items.value = response.data.data;
                meta.value  = response.data.meta;
            })
    });

    const nPages = useComputed(() => {
        if (meta.value.total) {
            return Math.ceil(meta.value.total / meta.value.limit);
        }

        return 0;
    });

    return (
        <>
            <Grid split="3" className="auto-rows-fr">
                {items.value.map((currentItem) => (
                    <CredentialsCard key={currentItem.id} data={currentItem}/>
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
