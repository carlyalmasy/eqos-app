import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';
import CredentialsSearchIntro from '../topics/CredentialsSearchInfo.md.js';
import OccupationSearch from '../components/OccupationSearch.jsx';
import DataIntro from '../topics/DataIntro.md.js'
import DiscoveryShortcuts from '../topics/DiscoveryShortcuts.jsx';


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
              {CredentialsSearchIntro}
            </Markdown>
              <div class="flex">
                <div class="flex-1">
                  <OccupationSearch />
                  <OccupationSearch />
                  <OccupationSearch />
                </div>
                <div class="flex-1">
                  <p>
                    Explore EQOS quality data by occupation, training provider, training program category or a combination of these choices.
                  </p>
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
            <div className="grid md:grid-cols-12 grid-rows-none gap-4 mt-6">
                <div className="md:col-span-6">
                  <img src="https://placehold.co/600x400?text=1" />
                </div>
                <div className="md:col-span-6">
                  <img src="https://placehold.co/600x400?text=2" />
                </div>
                <div className="md:col-span-6">
                  <img src="https://placehold.co/600x400?text=3" />
                </div>
                <div className="md:col-span-6">
                  <img src="https://placehold.co/600x400?text=4" />
                </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <h3>
              Discovery Shortcuts
            </h3>
            <p>
              You may be interested in these popular discovery paths.
            </p>
            <DiscoveryShortcuts />
          </div>
      </div>
    </>
  )
}