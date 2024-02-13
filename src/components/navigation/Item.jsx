import { NavLink } from "react-router-dom"

export default function Item({name, link}) {
  return (
    <>
      <NavLink
        to={link}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700"
      >
        {name}
      </NavLink>
    </>
  )
}