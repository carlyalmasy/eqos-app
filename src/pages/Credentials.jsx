import Markdown from "../components/Markdown.jsx";
import SearchIntro from "../topics/SearchIntro.md.js";
import SearchContent from "../topics/SearchContent.md.js";
import Label from "../components/forms/Label.jsx";
import SearchSelect from "../components/forms/inputs/SearchSelect.jsx";
import SearchResults from "../components/search/SearchResults.jsx"

export default function Credentials({ children }) {
    return (
        <>
            <div className="md:flex md:items-center">
                <div className="min-w-0 flex-1">
                    <Markdown>{SearchIntro}</Markdown>
                    <Markdown>{SearchContent}</Markdown>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6  items-end">
                <div className="col-span-3">
                    <Label text="Occupation" helpText="SOC codes" />
                    <SearchSelect type="occupation" collection="occupations" />
                </div>
                <div className="col-span-3 col-start-4">
                    <Label text="Training Program Category" helpText="CIP4 codes" />
                    <SearchSelect type="category" collection="categories" />
                </div>
                <div className="col-span-3 col-start-7">
                    <Label text="Training Provider" />
                    <SearchSelect type="provider" collection="providers" />
                </div>

                <div className="col-span-3 col-start-10">
                    <button className="w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500">
                        GO
                    </button>
                </div>
            </div>
            <div>
                <p className="font-bold mt-8">Top 5 job titles for this occupation</p>
                <p className="max-w-prose">
                    Key Account Manager, Compliance Administrative Assistant, Field Sales Trainer,
                    Director of Advocay, Talent Producer
                </p>
            </div>

            <div>
                <SearchResults />
            </div>
        </>
    );
}
