import Markdown from '../components/Markdown.jsx';
import SearchBar from "./SearchBar.jsx";
import SearchIntro from "../topics/SearchIntro.md.js"
import SearchContent from '../topics/SearchContent.md.js';

export default function SearchBox() {
  return (
    <>
      <div className="container rounded-lg bg-cyan-50 drop-shadow-sm mt-6 mx-auto p-6 px-8">
          <Markdown>
            {SearchIntro}
          </Markdown>
          <div className="flex mb-4">
            <div className="flex-1 align-middle">
              <div className="flex justify-between align-middle mt-2 mb-0">
                <p className="text-gray-700 mb-1">Occupation</p>
                <p className="text-gray-400 underline text-xs leading-7 mb-1">
                <a href="" >SOC codes</a>
                </p>
              </div>
              <SearchBar />
              <div className="flex justify-between align-middle mt-2">
                <p className="text-gray-700 mb-1">Training Provider</p>
                <p className="text-gray-400 underline text-xs leading-7 mb-1">
                <a href="" >Providers by State</a>
                </p>
              </div>                  
              <SearchBar />
              <div className="flex justify-between align-middle mt-2">
                <p className="text-gray-700 mb-1">Training Program Category</p>
                <p className="text-gray-400 underline text-xs leading-7 mb-1">
                <a href="" >CIP4 codes</a>
                </p>
              </div>                        
              <SearchBar />
            </div>
            <div className="flex-1 ml-10 content-between">
              <Markdown>
                {SearchContent}
              </Markdown>
              <button 
                class="w-full h-10 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">
                GO
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }