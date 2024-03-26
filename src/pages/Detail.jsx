import { useParams } from "react-router-dom";
import DetailContent from "../components/detail/DetailContent";
import PageHeight from "../layouts/PageHeight";

export default function Detail() {
    const params = useParams();

    return (
        <PageHeight>
            <DetailContent itemId={params.id} split="9/3" />
        </PageHeight>
    );
}
