// components
import { NavLink } from 'react-router-dom'

export default function Item({name, link}) {
  return (
    <NavLink
      to={link}
      className="text-neutrals-dark-100 hover:text-eqos-400 aria-[current=page]:text-eqos-400 aria-[current=page]:border-eqos-400 uppercase block border-l-2 border-transparent py-2 pl-3 pr-4 text-base font-semibold"
      activeClassName=""
    >
      {name}
    </NavLink>
  )
}
