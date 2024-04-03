import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'

export default function SlideOver({ children, isActive, closeSlideOver }) {

  return (
    <Transition.Root show={ isActive ? true : false } as={Fragment}>
      <Dialog as="div" className="relative z-10" open={ true } onClose={ (e) => closeSlideOver(e) }>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutrals-dark-500/20 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full lg:pl-20">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-1000 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-1000 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-7xl md:w-full">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6 mt-16">
                      <div className="flex items-start justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-neutrals-dark-200 hover:text-neutrals-dark-600 focus:outline-none"
                            onClick={ (e) => closeSlideOver(e) }
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XCircleIcon className="h-9 w-9" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mb-20 flex-1 px-4 sm:px-6 lg:mx-20">{ children }</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
