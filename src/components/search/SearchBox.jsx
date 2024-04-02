import Markdown from "../Markdown.jsx";
import SearchIntro from "../../topics/Credentials/SearchIntro.md.js";
import SearchContent from "../../topics/Credentials/SearchContent.md.js";
import Label from "../forms/Label.jsx";
import SearchSelect from "./SearchSelect.jsx";
import { useSignal } from "@preact/signals-react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import debug from "../../utilities/debug.js";

export default function SearchBox({ action }) {
    const [params] = useSearchParams();
    const state = useSignal({});

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

    const location = useLocation();
    const pathName = location.pathname;

    return (
        <>
            <form onSubmit={onSubmit} action={action}>
                <div className="@container">
                    <div className>
                        <Markdown>{SearchIntro}</Markdown>
                        <div className="@xl:hidden @3xl:grid">
                            <Markdown>{SearchContent}</Markdown>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-8 @3xl:content-center">
                        <div className="grid col-span-12 @xl:col-span-8 @3xl:col-span-9 @3xl:gap-8 mr-1">
                            <div className="grid @3xl:col-span-3">
                                <Label
                                    text="Occupation"
                                    helpText="SOC codes"
                                    id="SOC-codes"
                                    content="Lorem ipsum"
                                />
                                <SearchSelect
                                    name="occupation"
                                    collection="occupations"
                                    state={state}
                                />
                            </div>

                            <div className="grid @3xl:col-span-3 @3xl:col-start-4">
                                <Label
                                    text="Credential Category"
                                    helpText="CIP4 codes"
                                    id="CIP4-codes"
                                    content="Lorem ipsum"
                                />
                                <SearchSelect
                                    name="category"
                                    collection="categories"
                                    state={state}
                                />
                            </div>

                            <div className="grid @3xl:col-span-3 @3xl:col-start-7 mt-2">
                                <Label text="Training Provider" />
                                <SearchSelect
                                    name="provider"
                                    collection="providers"
                                    state={state}
                                />
                            </div>
                        </div>
                        <div className="grid col-span-12 @xl:col-span-4 @3xl:col-span-3">
                            <div className="@xs:hidden @xl:grid @3xl:hidden mt-4">
                                <Markdown>{SearchContent}</Markdown>
                            </div>
                            <input type="hidden" name="p" value="1" />
                            <button
                                type="submit"
                                className="self-end w-full @5xl:w-[50%] h-9 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-xl focus:shadow-outline hover:bg-eqos-500"
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
