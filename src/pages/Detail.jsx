import { useParams } from "react-router-dom";
import DetailContent from "../components/detail/DetailContent";


export default function Detail() {
    const params = useParams();

    return <DetailContent itemId={ params.id } split="9/3"/>;
}
