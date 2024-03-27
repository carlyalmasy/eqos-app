import Markdown from '../components/Markdown';
import content from '../topics/KitchenSink.md';

export default function KitchenSink() {
    return (
        <Markdown toc={{skip: 'specification'}}>
            {content}
        </Markdown>
    )
}
