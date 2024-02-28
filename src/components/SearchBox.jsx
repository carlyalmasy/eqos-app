import Markdown from '../components/Markdown.jsx';
import SearchIntro from "../topics/SearchIntro.md.js"
import SearchContent from '../topics/SearchContent.md.js';
import Label from '../components/forms/Label.jsx';
import SearchSelect from './forms/inputs/SearchSelect.jsx';

export default function SearchBox() {
  return (
    <>
      <div className="container rounded-lg bg-platinum-100 drop-shadow-sm mt-6 mx-auto p-6 px-8">
          <Markdown>
            {SearchIntro}
          </Markdown>
          <div className="flex mb-4">
            <div className="flex-1 align-middle">
              <Label text="Occupation" helpText="SOC codes" />
              <SearchSelect type="occupation" collection="occupations" />

              <Label text="Training Provider" helpText="test"  />
              <SearchSelect type="provider" collection="providers" />

              <Label text="Training Program Category" helpText="CIP4 codes" />
              <SearchSelect type="category" collection="categories" />
            </div>
            <div className="flex-1 ml-10 content-between">
              <Markdown>
                {SearchContent}
              </Markdown>
              <button
                className="w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500">
                GO
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }