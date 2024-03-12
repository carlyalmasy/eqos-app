import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import axios from "axios";
import CredentialsCard from "../credentials/CredentialsCard";
import Grid from "../layout/Grid";
import Pagination from "../../layouts/Pagination";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function SearchResults() {
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

    const lastPgResult = useComputed(() => {
        return (meta.value.limit * (currentPage.value - 1 )) + items.value.length;
    });

    const firstPgResult = useComputed(() => {
        if (totalItems !== 0) {
            return (lastPgResult - items.value.length) + 1;
        }
        return 0;
    });

    const totalItems = meta.value.total;

    return (
        <>
            <Grid split="3">
                {items.value.map((data) => (
                    <CredentialsCard key={ data.id } data={ data }/>
                ))}
            </Grid>
            <div className="mt-10">
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    totalItems={totalItems}
                    lastPgResult={lastPgResult}
                    firstPgResult={firstPgResult}
                />
            </div>
        </>
    );
}
