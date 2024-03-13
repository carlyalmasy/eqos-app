import Markdown from '../Markdown.jsx';
import SearchIntro from "../../topics/SearchIntro.md.js"
import SearchContent from '../../topics/SearchContent.md.js';
import Label from '../forms/Label.jsx';
import SearchSelect from './SearchSelect.jsx';
import { useSignal } from '@preact/signals-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import debug from '../../utilities/debug.js';

export default function SearchBox({ action }) {
    const [params] = useSearchParams();
    const state    = useSignal({});

    //
    // Initialize our state
    //

    useLayoutEffect(() => {
        const values   = {};
        const concerns = ['occupation', 'category', 'provider'];

        for (const[key, value] of params) {
            if (!concerns.includes(key)) {
                continue;
             }

            values[key] = value;
        }

        debug('Setting search state');
        state.value = values;
    }, [params]);


    //
    // Handle on submit navigation
    //

    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();

        const form   = event.target;
        const params = new URLSearchParams(new FormData(form));
        const action = new URL(form.action);

        navigate(action.pathname + (params ? '?' + params : ''));
    };

    return (
        <>
            <form onSubmit={ onSubmit } action={ action }>
                <Markdown>
                    {SearchIntro}
                </Markdown>
                <div className="flex mb-4">
                    <div className="flex-1 align-middle">
                        <Label text="Occupation" helpText="SOC codes" />
                        <SearchSelect name="occupation" collection="occupations" state={ state } />

                        <Label text="Training Program Category" helpText="CIP4 codes" />
                        <SearchSelect name="category" collection="categories" state={ state } />

                        <Label text="Training Provider" />
                        <SearchSelect name="provider" collection="providers" state={ state } />
                    </div>
                    <input type="hidden" name="p" value="1" />
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

