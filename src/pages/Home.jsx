import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';

export default function Home() {
  return (
    <>
      <Markdown>
        {Intro}
      </Markdown>
    </>
  )
}