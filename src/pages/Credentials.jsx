import Markdown from '../components/Markdown.jsx';
import SearchIntro from '../topics/SearchIntro.md.js'
import SearchContent from '../topics/SearchContent.md.js'
import Label from '../components/forms/Label.jsx';
import SearchSelect from '../components/forms/inputs/SearchSelect.jsx';
import Grid from '../components/layout/Grid.jsx';
import platinumOne from '../assets/images/gauges/platinum-1.svg'

export default function Credentials() {
    return (
        <>
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <Markdown>
                  {SearchIntro}
                </Markdown>
                <Markdown>
                  {SearchContent}
                </Markdown>
            </div>
        </div>
        <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-3">
              <Label text="Occupation" helpText="SOC codes" />
              <SearchSelect type="occupation" collection="occupations" />
            </div>
            <div className="col-span-3 col-start-4">
              <Label text="Training Provider"/>
              <SearchSelect type="provider" collection="providers" />
            </div>
            <div className="col-span-3 col-start-7">
              <Label text="Training Program Category" helpText="CIP4 codes" />
              <SearchSelect type="category" collection="categories" />
            </div>
            <div className="col-span-3 col-start-10">
              <button
                className="w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500">
                GO
              </button>
            </div>
        </div>
        <div>
          <p className='font-bold mt-8'>
            Top 5 job titles for this occupation
          </p>
          <p className='max-w-prose'>
            Key Account Manager, Compliance Administrative Assistant, Field Sales Trainer, Director of Advocay, Talent Producer
          </p>
        </div>
        <div>
          <Grid split="3" className="auto-rows">
            <div className="container rounded-lg bg-white drop-shadow-md">
              <div className="grid grid-cols-12 grid-rows-1">
                  <div className="col-span-6 p-6">
                    <div className="text-center relative mb-6">
                      <img
                        className="w-[100%] height-auto"
                        src={platinumOne}
                        alt="Platinum Tier One"
                      />
                      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 translate-y-1/4">
                        <p className="uppercase font-bold text-platinum-500 mb-0 leading-tight text-sm">Platinum</p>
                        <p className="mt-0 leading-tight text-xs">Overall Quality</p>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0"><span className='font-bold text-neutrals-dark-600'>95</span> Employment</p>
                      <div className="border border-neutrals-light-500 w-[100%]">
                        <div className="bg-platinum-300 h-[2px] w-[95%]"></div>
                      </div>
                      <p className="mb-0"><span className='font-bold text-neutrals-dark-600'>90</span> Opportunity</p>
                      <div className="border border-neutrals-light-500 w-[100%]">
                        <div className="bg-platinum-300 h-[2px] w-[90%]"></div>
                      </div>
                      <p className="mb-0"><span className='font-bold text-neutrals-dark-600'>89</span> Learnings</p>
                      <div className="border border-neutrals-light-500 w-[100%]">
                        <div className="bg-platinum-300 h-[2px] w-[89%]"></div>
                      </div>
                      <p className="mb-0"><span className='font-bold text-neutrals-dark-600'>92</span> Access</p>
                      <div className="border border-neutrals-light-500 w-[100%]">
                        <div className="bg-platinum-300 h-[2px] w-[92%]"></div>
                      </div>
                      <p className="mb-0"><span className='font-bold text-neutrals-dark-600'>98</span> Demand</p>
                      <div className="border border-neutrals-light-500 w-[100%]">
                        <div className="bg-platinum-300 h-[2px] w-[98%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 col-start-7 bg-platinum-100 p-6">
                    <p className="mb-0">Program Category</p>
                    <p className="font-medium text-xl text-neutrals-dark-600 leading-tight mt-0 mb-6">Data Entry/Micro Computer Application</p>
                    <p className="mb-0">Provider</p>
                    <p className="text-neutrals-dark-600 leading-tight mt-0 mb-6">edX</p>
                    <p className="mb-0">Occupation</p>
                    <p className="text-neutrals-dark-600 leading-tight mt-1">Medical Assistants</p>
                  </div>
              </div>
            </div>
            <img src="https://placehold.co/480x365?text=2" />
            <img src="https://placehold.co/480x365?text=3" />
            <img src="https://placehold.co/480x365?text=4" />
            <img src="https://placehold.co/480x365?text=5" />
          </Grid>
        </div>
      </>
    )
  }