import { NavLink } from 'react-router-dom'

export default function Item({name, link}) {
  return (
    <NavLink
      to={link}
      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
      activeClassName=""
    >
      {name}
    </NavLink>
  )
}