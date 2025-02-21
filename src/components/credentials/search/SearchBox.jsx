// libraries / utilities
import Markdown from "../../Markdown.jsx";
import debug from "../../../utilities/debug.js";

// components
import Label from "../../forms/Label.jsx";
import SearchSelect from "./SearchSelect.jsx";

// hooks
import { useSignal } from "@preact/signals-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLayoutEffect } from "react";

// content
import SearchIntro from "../../../topics/credentials/SearchIntro.md.js";
import SearchContent from "../../../topics/credentials/SearchContent.md.js";

export default function SearchBox({ action }) {
    const [params] = useSearchParams();
    const state    = useSignal({});

    //
    // Initialize our state
    //

    useLayoutEffect(() => {
        const values = {};
        const concerns = ["occupation", "category", "provider"];

        for (const [key, value] of params) {
            if (!concerns.includes(key)) {
                continue;
            }

            values[key] = value;
        }

        debug("Setting search state");
        state.value = values;
    }, [params]);

    //
    // Handle on submit navigation
    //

    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const params = new URLSearchParams(new FormData(form));
        const action = new URL(form.action);

        navigate(action.pathname + (params ? "?" + params : ""));
    };

    return (
        <>
            <form onSubmit={onSubmit} action={action}>
                <div className="@container">
                    <div>
                        <Markdown>{SearchIntro}</Markdown>
                        <div className="@lg:hidden @3xl:block">
                            <Markdown>{SearchContent}</Markdown>
                        </div>
                    </div>
                    <div className="grid gap-y-8 @lg:gap-8 grid-cols-12">
                        <div className="col-span-12 @lg:col-span-6 @3xl:col-span-9 @3xl:grid @3xl:grid-cols-12 @3xl:gap-8">
                            <div className="@3xl:col-span-4">
                                <Label
                                    text="Occupation"
                                    helpText="SOC codes"
                                    helpLink="https://www.bls.gov/oes/current/oes_stru.htm"
                                    id="SOC-codes"
                                    lineOne="O*NET Standard Occupational Classification."
                                    lineTwo="Follow this link to learn more."
                                />
                                <SearchSelect
                                    name="occupation"
                                    collection="occupations"
                                    state={state}
                                />
                            </div>

                            <div className="@3xl:col-span-4">
                                <Label
                                    text="Credential Category"
                                    helpText="CIP4 codes"
                                    helpLink="https://nces.ed.gov/ipeds/cipcode/browse.aspx?y=55"
                                    id="CIP4-codes"
                                    lineOne="Classification of Intructional Programs."
                                    lineTwo="Follow this link to learn more."
                                />
                                <SearchSelect
                                    name="category"
                                    collection="categories"
                                    state={state}
                                />
                            </div>

                            <div className="@3xl:col-span-4">
                                <Label text="Training Provider" />
                                <SearchSelect
                                    name="provider"
                                    collection="providers"
                                    state={state}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-between col-span-12 @lg:col-span-6 @3xl:col-span-3 @3xl:justify-end">
                            <input type="hidden" name="p" value="1" />
                            <div className="hidden mb-8 @lg:block @3xl:hidden">
                                <Markdown>{SearchContent}</Markdown>
                            </div>
                            <button
                                type="submit"
                                className="h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-xl focus:shadow-outline hover:bg-eqos-500"
                            >
                                GO
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
