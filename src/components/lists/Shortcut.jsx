import { NavLink } from "react-router-dom";

export default function Shortcut({icon, item}) {
    return (
      <>
        <li className="flex mt-2">
            { icon() }
            <NavLink to={ item.url }>{ item.title }</NavLink>
        </li>
      </>
    );
}
