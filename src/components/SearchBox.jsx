import Markdown from '../components/Markdown.jsx';
import SearchIntro from "../topics/SearchIntro.md.js"
import SearchContent from '../topics/SearchContent.md.js';
import Label from '../components/forms/Label.jsx';
import SearchSelect from './forms/inputs/SearchSelect.jsx';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { useEffect } from 'react';

const onSubmit = (event) => {
    event.preventDefault();

    // figure out how to actually reroute to /credentials?
};

export default function SearchBox() {
    const state = useSignal({});

    //
    // On load, set our state
    //

    useEffect(() => {
        const params = {};
        const search = new URLSearchParams(window.location.search);

        for (const[key, value] of search) {
            params[key] = value;
        }

        state.value = params;
    }, []);

    //
    // On update to state, push params to navigation
    //

    useSignalEffect(() => {
        if (Object.keys(state.value).length) {
            history.pushState('', '', '?' + new URLSearchParams(state.value));
        } else {
            history.pushState('', '', window.location.pathname);
        }
    });

    return (
        <>
            <form onSubmit={ onSubmit } className="container rounded-lg bg-platinum-100 drop-shadow-sm mt-6 mx-auto p-6 px-8">
                <Markdown>
                    {SearchIntro}
                </Markdown>
                <div className="flex mb-4">
                    <div className="flex-1 align-middle">
                        <Label text="Occupation" helpText="SOC codes" />
                        <SearchSelect type="occupation" collection="occupations" state={ state } />

                        <Label text="Training Program Category" helpText="CIP4 codes" />
                        <SearchSelect type="category" collection="categories" state={ state } />

                        <Label text="Training Provider" />
                        <SearchSelect type="provider" collection="providers" state={ state } />
                    </div>
                    <div className="flex-1 ml-10 content-between">
                        <Markdown>
                            {SearchContent}
                        </Markdown>
                        <button
                            type="submit"
                            className="w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500">
                            GO
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
