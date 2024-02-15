import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MobileItem from './MobileItem';
import Item from './Item';
import logo from '../../assets/images/EQOSLogo.png';

export default function PageBar({items}) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                  <a href="/">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="EQOS"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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