import CopyIcon from "../icons/CopyIcon";
import { Tooltip } from "react-tooltip";

const copy = function (from) {
    navigator.clipboard.writeText(document.querySelector(from).innerText);
};

export default function Copy({ className, from }) {
    return (
        <button
            onClick={ () => copy(from) }
            className={className ? className : "inline-block bg-neutrals-light-100"}
        >
            <a className="text-neutrals-dark-100 hover:text-neutrals-dark-500 active:text-neutrals-dark-100" data-tooltip-id="copy"><CopyIcon /></a>

            <Tooltip className="hidden md:block" id="copy" openOnClick>
                <p className="text-white">Copied!</p>
            </Tooltip>
        </button>
    );
}
