// components
import Container from "./Container";

export default function CardAside({ children }) {
    return (
        <Container className="lg:flex justify-start space-x-0 lg:space-x-14">
            <div className="flex-1">
                { children[0] ?? '' }
            </div>
            <div className="p-8 bg-silver-100 rounded-md  drop-shadow-none mt-14 lg:max-w-[500px]">
                { children[1] ?? '' }
            </div>
        </Container>
    );
}
