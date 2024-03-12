import { useSignal, useComputed, useSignalEffect, signal } from '@preact/signals-react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import bjoin from '../../../utilities/bjoin';
import axios from 'axios';
import debug from '../../../utilities/debug';

const baseUrl = import.meta.env.VITE_CORE_URL;

//
// Update the selection value in state (triggering search)
//

const updateSelection = function(state, query, name, value) {
    let params = {...state.value}; // forces clone

    if (value) {
        params[name] = value;
    } else {
        delete params[name];
    }

    state.value = params;
    query.value = '';
};


//
// Update the query value (triggering fuzzy search)
//

const updateQuery = function(state, query, name, value) {
    if (value.length == 0) {
        let params = {...state.value};

        delete params[name];

        state.value = params;
    }

    query.value = value;
}



export default function SearchSelect({name, collection, state}) {
    const url   = '/api/app/search/' + collection;
    const items = useSignal([]);
    const query = useSignal('');

    //
    // On change to state or query, get new options
    //

    useSignalEffect(() => {
        const params = new URLSearchParams();

        for (let key in state.value) {
            if (key == name) {
                continue;
            }

            params.set(key, state.value[key]);
        }

        if (query.value.length) {
            params.set('fuzzy', query.value);
        }

        debug('Getting ' + collection);

        axios
            .get(new URL(url + (params.size ? '?' + params : ''), baseUrl))
            .then((response) => {
                items.value = response.data;
            })
        ;
    });

    //
    // Get the the selected item
    //

    const selected = useComputed(() => {
        if (items.value && name in state.value) {
            for (const item of items.value) {
                if (item.id == state.value[name]) {
                    return item;
                }
            }
        }

        return {};
    });

    return (
        <Combobox as="div" value={ selected.value.id ?? null} name={ name } onChange={ (value) => { updateSelection(state, query, name, value) } }>
            <div className="relative">
                <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-neutrals-dark-600 shadow-sm ring-1 ring-inset ring-neutrals-dark-300 focus:ring-2 focus:ring-inset focus:ring-eqos-600 sm:text-sm sm:leading-6"
                    onChange={ (event) => { updateQuery(state, query, name, event.target.value) } }
                    placeholder="Start Typing..."
                    displayValue={ () => selected.value.name ?? '' }
                />

                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-neutrals-dark-400" aria-hidden="true" />
                </Combobox.Button>

                {
                    items.value.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {
                                items.value.map((item) => (
                                    <Combobox.Option
                                        key={ item.id }
                                        value={ item.id }
                                        className={ ({ active }) => bjoin(
                                            'relative cursor-default select-none py-2 pl-8 pr-4',
                                            active ? 'bg-eqos-600 text-neutrals-light-100' : 'text-neutrals-dark-500'
                                        )}
                                    >
                                        {
                                            ({ active, selected }) => (
                                                <>
                                                    <span className={ bjoin('block truncate', selected && 'font-semibold') }>{ item.name }</span>

                                                    {
                                                        selected && (
                                                            <span
                                                                className={ bjoin(
                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                                active ? 'text-neutrals-light-100' : 'text-eqos-600'
                                                                ) }
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    )
                }
            </div>
        </Combobox>
    )
}

SearchSelect.defaultProps = {
    state: signal({})
};
