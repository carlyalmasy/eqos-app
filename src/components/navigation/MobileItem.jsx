import { NavLink } from 'react-router-dom'

export default function Item({name, link}) {
  return (
    <NavLink
      to={link}
      className="text-neutrals-dark-100 hover:text-eqos-600 aria-[current=page]:text-eqos-600 uppercase block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold hover:border-neutrals-dark-300"
      activeClassName=""
    >
      {name}
    </NavLink>
  )
}