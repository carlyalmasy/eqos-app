import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';

export default function Home() {
  return (
    <>

      <div className="grid grid-cols-12 grid-rows-2 gap-16 grid-rows-none">
          <div className="col-span-6">
            <Markdown>
              {Intro}
            </Markdown>
          </div>
          <div className="col-span-6 col-start-7">
            <div className="h-full w-full bg-slate-100">

            </div>
          </div>
          <div className="col-span-8 row-start-2">
            <h3>
              Title for Data Visualizations
            </h3>

            <div className="grid grid-cols-12 grid-rows-2 gap-4">
                <div className="col-span-6">
                  <img src="https://placehold.co/600x400" />
                </div>
                <div className="col-span-6 col-start-7">
                  <img src="https://placehold.co/600x400" />
                </div>
                <div className="col-span-6 row-start-2">
                  <img src="https://placehold.co/600x400" />
                </div>
                <div className="col-span-6 col-start-7 row-start-2">
                  <img src="https://placehold.co/600x400" />
                </div>
            </div>


          </div>
          <div className="col-span-4 col-start-9 row-start-2">
            <h3>
              Discovery Shortcuts
            </h3>
          </div>
      </div>
    </>
  )
}