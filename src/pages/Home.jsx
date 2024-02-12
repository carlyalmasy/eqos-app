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
            <div className="h-full w-full bg-slate-100">
            </div>
          </div>
          <div className="md:col-span-8">
            <h3>
              Title for Data Visualizations
            </h3>

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
          </div>
      </div>
    </>
  )
}