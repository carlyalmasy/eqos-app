import Markdown from "../Markdown.jsx";
import SearchIntro from "../../topics/SearchIntro.md.js";
import SearchContent from "../../topics/SearchContent.md.js";
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
                <div className={
                    pathName === "/credentials"
                        ? "hidden" : ""
                    }
                >
                    <Markdown>{SearchIntro}</Markdown>
                </div>
                <div
                    className={
                        pathName === "/credentials"
                            ? "grid grid-cols-12 grid-rows-1 gap-8 my-4 items-end"
                            : "grid grid-cols-12 grid-rows-3 gap-4 my-4"
                    }
                >
                    <div
                        className={
                            pathName === "/credentials"
                                ? "grid grid-cols-subgrid col-span-9 gap-8 "
                                : "col-span-7 row-span-3"
                        }
                    >
                        <div className=
                            {pathName === "/credentials"
                                ? "col-span-3"
                                : ""
                            }
                        >
                            <Label text="Occupation" helpText="SOC codes" />
                            <SearchSelect
                                name="occupation"
                                collection="occupations"
                                state={state}
                            />
                        </div>

                        <div
                            className={pathName === "/credentials"
                                ? "col-span-3 col-start-4"
                                : ""}
                        >
                            <Label text="Training Program Category" helpText="CIP4 codes" />
                            <SearchSelect
                                name="category"
                                collection="categories"
                                state={state} />
                        </div>

                        <div
                            className={
                                pathName === "/credentials"
                                ? "col-span-3 col-start-7"
                                : ""}
                        >
                            <Label text="Training Provider" />
                            <SearchSelect
                                name="provider"
                                collection="providers"
                                state={state} />
                        </div>
                    </div>
                    <div
                        className={
                            pathName === "/credentials"
                                ? "col-span-3 col-start-10"
                                : "col-span-5 row-span-3 col-start-8 ml-8"
                        }
                    >
                        <div className={
                            pathName === "/credentials"
                                ? "hidden" : ""
                            }
                        >
                            <Markdown>{SearchContent}</Markdown>
                        </div>
                        <input type="hidden" name="p" value="1" />
                        <div>
                            <button
                                type="submit"
                                className={
                                    pathName === "/credentials"
                                        ? "w-[50%] h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500"
                                        : "w-full h-10 px-6 text-white transition-colors duration-150 bg-eqos-400 rounded-lg focus:shadow-outline hover:bg-eqos-500"
                                }
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
