import Markdown from '../components/Markdown.jsx';
import CredentialsIntro from '../topics/CredentialsIntro.md.js';

export default function Credentials() {
    return (
        <>
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <Markdown>
                {CredentialsIntro}
                </Markdown>
            </div>
        </div>
      </>
    )
  }