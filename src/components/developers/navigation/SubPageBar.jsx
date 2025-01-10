//components
import { Disclosure } from '@headlessui/react';

import SubItem from './SubItem';

export default function SubPageBar({items}) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div>
            <div className="relative flex h-16 lg:h-12 justify-between">

              <div className="flex flex-wrap my-auto flex-grow-1 items-center justify-end w-full">
                <div className="hidden flex-grow-1 space-x-8 text-sm lg:flex">
                    {
                        items.map(
                            (item, i) => <SubItem key={i} name={item.name} link={item.link} />
                        )
                    }
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
