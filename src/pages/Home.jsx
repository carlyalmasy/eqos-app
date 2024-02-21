import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';
import SearchIntro from '../topics/SearchIntro.md.js';
import SearchContent from '../topics/SearchContent.md.js';
import DataIntro from '../topics/DataIntro.md.js'
import DataGrid from '../components/DataGrid.jsx';
import ShortcutsIntro from '../topics/ShortcutsIntro.md.js'
import DiscoveryShortcuts from '../components/DiscoveryShortcuts.jsx';
import SearchBox from '../components/SearchBox.jsx';


export default function Home() {
  return (
    <>

      <div className="grid md:grid-cols-12 grid-rows-none gap-16">
          <div className="md:col-span-6 mt-6">
            <Markdown>
              {Intro}
            </Markdown>
          </div>
          <div className="md:col-span-6">
            <SearchBox />
          </div>
          <div className="md:col-span-8">
            <Markdown>
              {DataIntro}
            </Markdown>
            <DataGrid />
          </div>
          <div className="md:col-span-4">
            <Markdown>
              {ShortcutsIntro}
            </Markdown>
            <DiscoveryShortcuts />
          </div>
      </div>
    </>
  )
}