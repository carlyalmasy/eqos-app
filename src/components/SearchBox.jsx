import Markdown from '../components/Markdown.jsx';
import OccupationsSearchBar from './OccupationsSearchBar.jsx';
import CatSearchBar from "./CatSearchBar.jsx";
import ProviderSearchBar from './ProviderSearchBar.jsx';
import SearchIntro from "../topics/SearchIntro.md.js"
import SearchContent from '../topics/SearchContent.md.js';
import Label from '../components/forms/Label.jsx';

export default function SearchBox() {
  return (
    <>
      <div className="container rounded-lg bg-cyan-50 drop-shadow-sm mt-6 mx-auto p-6 px-8">
          <Markdown>
            {SearchIntro}
          </Markdown>
          <div className="flex mb-4">
            <div className="flex-1 align-middle">
              <Label text="Occupation" helpText="SOC codes" />
              <OccupationsSearchBar />

              <Label text="Training Provider" />
              <ProviderSearchBar />

              <Label text="Training Program Category" helpText="CIP4 codes" />
              <CatSearchBar type="category" collection="categories" />
            </div>
            <div className="flex-1 ml-10 content-between">
              <Markdown>
                {SearchContent}
              </Markdown>
              <button
                className="w-full h-10 px-6 text-blue-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800">
                GO
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }