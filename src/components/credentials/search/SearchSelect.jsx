// libraries / utilities
import _ from "lodash";
import axios from "axios";
import bjoin from "../../../utilities/bjoin";
import debug from "../../../utilities/debug";

// components
import { useSignal, useComputed, useSignalEffect, signal } from "@preact/signals-react";
import { CheckIcon, ChevronUpDownIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { Combobox, Transition } from "@headlessui/react";

const baseUrl = import.meta.env.VITE_CORE_URL;

//
// Update the selection value in state (triggering search)
//

const updateSelection = function (state, query, name, value) {
    let params = { ...state.value }; // forces clone

    if (value) {
        params[name] = value;
    } else {
        delete params[name];
    }

    state.value = params;
    query.value = "";
};

//
// Update the query value (triggering fuzzy search)
//

const updateQuery = function (state, query, name, value) {
    if (value.length == 0) {
        let params = { ...state.value };

        delete params[name];

        state.value = params;
    }

    query.value = value;
};

export default function SearchSelect({ name, collection, state }) {
    const items      = useSignal([]);
    const query      = useSignal("");
    const getResults = _.debounce(function (params) {
        const url = "/api/app/search/" + collection;

        debug("Getting " + collection);
        axios
            .get(new URL(url + (params.size ? "?" + params : ""), baseUrl))
            .then((response) => {
                items.value = response.data;
            })
        ;
    }, 500);

    //
    // On change to state or query, get new options
    //

    useSignalEffect(() => {
        const params = new URLSearchParams();

        for (let key in state.value) {
            params.set(key, state.value[key]);
        }

        if (query.value.length) {
            params.set("fuzzy", query.value);
        }

        getResults(params);
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
        <Combobox
            as="div"
            className="relative"
            value={selected.value.id ?? null}
            name={name}
            onChange={(value) => {
                updateSelection(state, query, name, value)
            }}
            nullable
        >
            <div>
                <Combobox.Input
                    className="truncate w-full rounded-md bg-white py-1.5 pl-3 pr-16 text-neutrals-dark-400 shadow-sm sm:text-sm sm:leading-6 focus:outline-none border-neutrals-light-300 border"
                    onChange={(event) => {
                        updateQuery(state, query, name, event.target.value);
                    }}
                    placeholder="Start Typing..."
                    displayValue={() => selected.value.name ?? ""}
                />
                {selected.value.name && (
                    <button
                        className="h-5 w-5 text-neutrals-light-500 absolute bottom-2 right-8"
                    >
                        <XCircleIcon onClick={() => {
                            updateSelection(state, query, name, null);
                        }} />
                    </button>
                )}
                <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-500 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                ></Transition>
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-neutrals-dark-400"
                        aria-hidden="true"
                    />
                </Combobox.Button>

                {items.value.length > 0 && (
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm z-10">
                        {items.value.map((item) => (
                            <Combobox.Option
                                key={item.id}
                                value={item.id}
                                className={({ active }) =>
                                    bjoin(
                                        "relative cursor-default select-none py-2 pl-8 pr-4",
                                        active ? "bg-eqos-400 text-white" : "text-neutrals-dark-500"
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <span
                                            className={bjoin(
                                                "block text-wrap ",
                                                selected && "font-semibold"
                                            )}
                                        >
                                            {item.name}
                                        </span>

                                        {selected && (
                                            <span
                                                className={bjoin(
                                                    "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                                    active ? "text-white" : "text-eqos-400"
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    );
}

SearchSelect.defaultProps = {
    state: signal({}),
};
