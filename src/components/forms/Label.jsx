import { Tooltip } from "react-tooltip";

export default function Label({ text, helpText, id, content }) {
    return (
        <div className="flex justify-between items-center mt-4 mb-2">
            <label className="text-neutrals-dark-400 text-xs leading-4">{text}</label>
            {helpText && (
                <>
                    <a
                        className="text-silver-400 underline text-2xs hover:text-eqos-600 hover:no-underline cursor-help"
                        data-tooltip-id={id}
                    >
                        {helpText}
                    </a>
                    <Tooltip id={id}>
                        <div>
                            <p className="text-white">{content}</p>
                        </div>
                    </Tooltip>
                </>
            )}
        </div>
    );
}
