// libraries / utilites
import config from "../../../redocly.config";

// components
import Container from "../../layouts/Container";
import { RedocStandalone } from "redoc";

const docsUrl = import.meta.env.VITE_CORE_URL + "/openapi.yml";

export default function API() {
    return (
        <Container className="api">
            <RedocStandalone specUrl={docsUrl} options={config} />
        </Container>
    );
}
