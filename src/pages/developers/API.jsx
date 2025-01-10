// libraries / utilites
import config from "../../../redocly.config";

// components
import { RedocStandalone } from "redoc";

import Container from "../../layouts/Container";
import SubHeader from "../../components/developers/navigation/SubHeader";

// content
import subNavItems from "../../topics/developers/Navigation.md";

const docsUrl = import.meta.env.VITE_CORE_URL + "/openapi.yml";

export default function API() {
    return (
        <>
            <SubHeader items={subNavItems} />
            <Container className="api">
                <RedocStandalone specUrl={docsUrl} options={config} />
            </Container>
        </>
    );
}
