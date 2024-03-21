import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileItem from './MobileItem';
import Item from './Item';
import logo from '../../assets/images/EQOSLogo.png';
import { NavLink } from 'react-router-dom';

export default function PageBar({items}) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutrals-dark-400 hover:bg-neutrals-light-100 hover:text-neutrals-dark-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="EQOS"
                    />
                  </NavLink>
                  <span className='mt-0 pl-10 font-semibold text-xl text-eqos-400 uppercase'>EQOS Quality Signal</span>
                </div>
                <div className="hidden sm:flex sm:space-x-8 ml-auto">
                    {
                        items.map(
                            (item, i) => <Item key={i} name={item.name} link={item.link} />
                        )
                    }
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
                {
                    items.map(
                        (item, i) => <MobileItem key={i} name={item.name} link={item.link} />
                    )
                }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
