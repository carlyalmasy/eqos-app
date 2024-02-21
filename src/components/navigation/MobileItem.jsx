import { NavLink } from 'react-router-dom'

export default function Item({name, link}) {
  return (
    <NavLink
      to={link}
      className="text-gray-500 hover:text-gray-700 aria-[current=page]:text-gray-800 uppercase block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-semibold hover:border-gray-300 hover:bg-gray-50"
      activeClassName=""
    >
      {name}
    </NavLink>
  )
}