import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';
import SearchIntro from '../topics/SearchIntro.md.js';
import SearchContent from '../topics/SearchContent.md.js';
import OccupationSearch from '../components/OccupationSearch.jsx';
import DataIntro from '../topics/DataIntro.md.js'
import DataGrid from '../components/DataGrid.jsx';
import ShortcutsIntro from '../topics/ShortcutsIntro.md.js'
import DiscoveryShortcuts from '../components/DiscoveryShortcuts.jsx';


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
            <div className="container p-6 mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100 mt-6">
            <Markdown>
              {SearchIntro}
            </Markdown>
              <div class="flex">
                <div class="flex-1">
                  <OccupationSearch />
                  <OccupationSearch />
                  <OccupationSearch />
                </div>
                <div class="flex-1">
                  <Markdown>
                    {SearchContent}
                  </Markdown>
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
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