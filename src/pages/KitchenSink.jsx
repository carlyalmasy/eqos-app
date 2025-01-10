// components
import Container from '../layouts/Container';
import Markdown from '../components/Markdown';

// content
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
