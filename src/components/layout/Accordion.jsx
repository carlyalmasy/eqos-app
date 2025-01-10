import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const filters = [
    {
        title: "Quality Score Level",
        description: "Show or hide results by quality score level",
        options: "Platinum",
    },
    {
        title: "Job Title",
        description: "Filter results by one or more job title",
        options: "Platinum",
    },
    {
        title: "Skills",
        description: "Filter results by one or more skill",
        options: "Platinum",
    },
];

export default function Accordion() {
    return (
        <div className="bg-white pt-5">
            <div className="">
                <div className="">
                    <dl className="">
                        {filters.map((filter) => (
                            <Disclosure as="div" key={filter.title} className="py-4">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-neutrals-dark-500 pb-2 border-b-2">
                                                <span className="text-base font-bold leading-7">
                                                    {filter.title}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusIcon
                                                            className="h-4 w-4 text-neutrals-dark-500"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusIcon
                                                            className="h-4 w-4 text-neutrals-dark-500"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-xs text-neutrals-dark-100">{filter.description}</p>
                                            <p className="text-base leading-7 text-neutrals-dark-500 mt-5">
                                                {filter.options}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
