import { NavLink } from "react-router-dom"

export default function Item({name, link}) {
  return (
    <>
      <NavLink
        to={link}
        className="text-neutrals-dark-100 hover:text-eqos-400 aria-[current=page]:text-eqos-400 aria-[current=page]:border-eqos-400 inline-flex items-center border-transparent border-b-2 px-1 pt-1 lg:py-5 uppercase font-semibold"
      >
        {name}
      </NavLink>
    </>
  )
}
