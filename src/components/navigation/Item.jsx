import { NavLink } from "react-router-dom"

export default function Item({name, link}) {
  return (
    <>
      <NavLink
        to={link}
        className="text-neutrals-dark-100 hover:text-eqos-600 aria-[current=page]:text-eqos-600 inline-flex items-center border-transparent px-1 pt-1 uppercase font-semibold"
      >
        {name}
      </NavLink>
    </>
  )
}