import { NavLink } from "react-router-dom"

export default function Item({name, link}) {
  return (
    <>
      <NavLink
        to={link}
        className="text-gray-500 hover:text-gray-700 aria-[current=page]:text-gray-800 inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm uppercase font-semibold"
      >
        {name}
      </NavLink>
    </>
  )
}