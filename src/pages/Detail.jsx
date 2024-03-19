import { useSignal } from "@preact/signals-react";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import DetailContent from "../components/detail/DetailContent";
import axios from "axios";
import debug from "../utilities/debug";

const baseUrl = import.meta.env.VITE_CORE_URL;

export default function Detail() {
    const item = useSignal({});
    const { id } = useParams();

    useLayoutEffect(() => {
        debug("Getting result");
        axios.get(new URL("/api/app/detail/credentials/" + id, baseUrl)).then((response) => {
            item.value = response.data;
        });
    }, [id]);

    if (!Object.keys(item.value).length) {
        return <></>;
    }

    const data = item.value;

    return <DetailContent data={data} split="9/3"/>;
}
