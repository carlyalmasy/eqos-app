import Container from '../layouts/Container';
import Markdown from '../components/Markdown';
import content from '../topics/KitchenSink.md';

export default function KitchenSink() {
    return (
        <Container>
            <Markdown toc={{skip: 'specification'}}>
                {content}
            </Markdown>
        </Container>
    )
}
