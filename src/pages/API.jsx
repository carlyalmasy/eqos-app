import { RedocStandalone } from "redoc";
import PageHeight from "../layouts/PageHeight";

const docsUrl = import.meta.env.VITE_CORE_URL + "/openapi.yml";

export default function API() {
    return (
        <>
            <PageHeight>
                <RedocStandalone specUrl={docsUrl} />
            </PageHeight>
        </>
    );
}
