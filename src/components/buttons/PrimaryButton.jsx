import { NavLink } from "react-router-dom";

export default function PrimaryButton({ text, link }) {
    return (
        <NavLink
            to={ link }
            className="uppercase rounded-md bg-eqos-400 px-8 py-3 font-semibold text-white shadow-sm hover:bg-eqos-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eqos-600"
        >
            { text }
        </NavLink>
    );
}
