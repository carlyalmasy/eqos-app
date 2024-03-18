import { useComputed, useSignal, useSignalEffect } from "@preact/signals-react";
import axios from "axios";
import CredentialsCard from "../credentials/CredentialsCard";
import Grid from "../layout/Grid";
import Pagination from "../../layouts/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import debug from "../../utilities/debug";
import { useLayoutEffect } from "react";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function SearchResults() {
    const items       = useSignal([]);
    const meta        = useSignal({});
    const currentPage = useSignal(1);

    const [
        params,
        setParams
    ] = useSearchParams();

    useSignalEffect(() => {
        if (params.get('p') != currentPage.value) {
            debug('Setting page parameter');
            params.set('p', currentPage.value);
            setParams(params);
        }
    });

    useEffect(() => {
        debug('Getting results');
        axios
            .get(new URL('/api/app/search?' + params, baseUrl))
            .then((response) => {
                items.value       = response.data.data;
                meta.value        = response.data.meta;
                currentPage.value = meta.value.page;
            })
        ;
    }, [params]);

    useLayoutEffect(() => {
        currentPage.value = params.get('p');
    }, []);

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
            <Grid split="3" gapSize="6">
                {items.value.map((data) => (
                    <CredentialsCard key={ data.id } data={ data } id={data.id}/>
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
