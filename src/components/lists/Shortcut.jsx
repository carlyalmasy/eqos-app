import { NavLink } from "react-router-dom";

export default function Shortcut({ icon, item }) {
    return (
        <>
            <NavLink to={item.url}>
                <li className="flex mt-2.5 items-center text-neutrals-dark-100 hover:text-neutrals-dark-500 text-sm">
                    {icon()}
                    {item.title}
                </li>
            </NavLink>
        </>
    );
}
