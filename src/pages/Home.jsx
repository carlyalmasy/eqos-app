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
            <div className="container rounded-lg bg-cyan-50 drop-shadow-sm mt-6 mx-auto p-6 px-8">
              <Markdown>
                {SearchIntro}
              </Markdown>
              <div className="flex mb-4">
                <div className="flex-1 align-middle">
                  <div className="flex justify-between align-middle">
                    <p className="text-gray-700">Occupation</p>
                    <p className="text-gray-500 underline text-xs leading-7">
                    <a href="" >SOC codes</a>
                    </p>
                  </div>
                  <OccupationSearch />
                  <div className="flex justify-between align-middle">
                    <p className="text-gray-700">Training Provider</p>
                    <p className="text-gray-500 underline text-xs leading-7">
                    <a href="" >Providers by State</a>
                    </p>
                  </div>                  
                  <OccupationSearch />
                  <div className="flex justify-between align-middle">
                    <p className="text-gray-700">Training Program Category</p>
                    <p className="text-gray-500 underline text-xs leading-7">
                    <a href="" >CIP4 codes</a>
                    </p>
                  </div>                        
                  <OccupationSearch />
                </div>
                <div className="flex-1 ml-10 content-between">
                  <Markdown>
                    {SearchContent}
                  </Markdown>
                  <button 
                    class="w-full h-10 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                    GO
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