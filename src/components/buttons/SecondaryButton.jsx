import { NavLink } from "react-router-dom";

export default function PrimaryButton({ text, link }) {
    return (
        <NavLink
            to={ link }
            className="uppercase font-semibold text-neutrals-dark-100 hover:text-eqos-600 hover:underline hover:underline-offset-4 hover:decoration-2"
        >
            { text }
        </NavLink>
    );
}
