import Container from "../../layouts/Container";
import DetailContent from "../../components/credentials/detail/DetailContent";
import { useParams } from "react-router-dom";

export default function Detail() {
    const params = useParams();

    return (
        <Container>
            <DetailContent itemId={params.id} split="9/3" />
        </Container>
    )
}
