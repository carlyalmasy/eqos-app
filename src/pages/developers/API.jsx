import Container from "../../layouts/Container";
import config from "../../../redocly.config";
import { RedocStandalone } from "redoc";

const docsUrl = import.meta.env.VITE_CORE_URL + "/openapi.yml";

export default function API() {
    return (
        <Container className="api">
            <RedocStandalone specUrl={docsUrl} options={config} />
        </Container>
    );
}
