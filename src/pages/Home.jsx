import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';

export default function Home() {
  return (
    <>

      <div className="grid md:grid-cols-12 grid-rows-none gap-16">
          <div className="md:col-span-6">
            <Markdown>
              {Intro}
            </Markdown>
          </div>
          <div className="md:col-span-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100">
            <h3>
              Discover Quality Credentials
            </h3>
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
          <div className="md:col-span-8">
            <h3>
              Title for Data Visualizations
            </h3>
            <p>
              Insights discovered by our team when we queried the current EQOS data set.
            </p>
            <div className="grid md:grid-cols-12 grid-rows-none gap-4">
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
            <h4>
              In-Demand Occupations
            </h4>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                </svg>
                Cyber Security
              </li>
            </ul>
          </div>
      </div>
    </>
  )
}