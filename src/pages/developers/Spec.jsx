// libraries / utilities
import axios from "axios";

// hooks
import { signal, useSignalEffect } from "@preact/signals-react";

// components
import Container from "../../layouts/Container";
import Markdown from "../../components/Markdown";
import SubHeader from "../../components/developers/navigation/SubHeader";

// content
import subNavItems from "../../topics/developers/Navigation.md";
import intro from "../../topics/developers/SpecIntro.md";

const baseUrl = import.meta.env.VITE_CORE_URL;
const data = signal("");

export default function Spec() {
    useSignalEffect(() => {
        axios.get(baseUrl + "/spec.md").then((response) => {
            data.value = response.data;
        });
    });

    return (
        <>
            <SubHeader items={subNavItems} />
            <Container className="spec">
                <Markdown>{intro}</Markdown>
                <Markdown toc={{ skip: "specification" }}>{data.value}</Markdown>
            </Container>
        </>
    );
}
