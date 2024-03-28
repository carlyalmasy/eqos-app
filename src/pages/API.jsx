import { RedocStandalone } from "redoc";
import config from "../../redocly.config.js";

const docsUrl = import.meta.env.VITE_CORE_URL + "/openapi.yml";

export default function API() {
    return (
        <div class="api">
            <RedocStandalone specUrl={docsUrl} options={config} />
        </div>
    );
}
