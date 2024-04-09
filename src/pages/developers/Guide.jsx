
import Container from '../../layouts/Container';
import Markdown from '../../components/Markdown';
import intro from '../../topics/Developer/GuideIntro.md';
import guide from '../../topics/Developer/Guide.md';

export default function Guide() {
  return (
    <Container className="spec">
        <Markdown>
            { intro }
        </Markdown>
        <Markdown toc={{skip: 'guide'}}>
            { guide }
        </Markdown>
    </Container>
  )
}
