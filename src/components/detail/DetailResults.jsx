import { useEffect } from "react";
import { useSignal } from "@preact/signals-react";
import axios from "axios";

export default function DetailResults() {
    const url = import.meta.env.VITE_CORE_URL + "/api/app/search?occupation=110";
    const items = useSignal([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                items.value = response.data.data;
            })
    }, []);

    return (
        <>
        {items.value[0].map((data) => (
            <CredentialsCard key={data.id} data={data}/>
        ))}
        </>
    );
}
