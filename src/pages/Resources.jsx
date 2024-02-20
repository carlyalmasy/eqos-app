import Markdown from '../components/Markdown.jsx';
import ResourcesIntro from '../topics/ResourcesIntro.md.js';

export default function Resources() {
    return (
        <>
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <Markdown>
                {ResourcesIntro}
              </Markdown>
            </div>
        </div>
      </>
    )
  }