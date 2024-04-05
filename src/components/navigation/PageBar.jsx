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
            <div className="relative flex h-20 lg:h-16 justify-between">

              <div className="flex flex-grow-0 items-center lg:hidden">
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

              <div className="flex flex-wrap my-auto flex-grow-1 items-center justify-between w-full">
                <div className="flex flex-col space-y-1 flex-grow-0 items-center mx-auto lg:mx-0 lg:flex-row">
                  <NavLink to="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="EQOS"
                    />
                  </NavLink>
                  <span className="text-center lg:text-right font-semibold text-eqos-400 uppercase block mt-0 lg:ml-8">EQOS Quality Signal</span>
                </div>
                <div className="hidden flex-grow-1 space-x-8 text-sm lg:flex">
                    {
                        items.map(
                            (item, i) => <Item key={i} name={item.name} link={item.link} />
                        )
                    }
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
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
