// hooks
import { useSignal } from "@preact/signals-react";

// components
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";

import Container from "../../layouts/Container.jsx";
import DetailContent from "../../components/credentials/detail/DetailContent.jsx";
import Filter from "../../components/credentials/filter/Filter.jsx";
import SearchBox from "../../components/credentials/search/SearchBox.jsx";
import SearchResults from "../../components/credentials/search/SearchResults.jsx";
import SlideOver from "../../components/layout/SlideOver.jsx";

export default function Credentials({}) {

    const selectedItem = useSignal(null);

    const onClose = function (e) {
        selectedItem.value = "";
    };

    const onSelect = function (e, item) {
        e.preventDefault();
        selectedItem.value = item.id;
    };

    const sortOptions = [
        { name: 'Employment', href: '#', current: false },
        { name: 'Opportunity', href: '#', current: false },
        { name: 'Learnings', href: '#', current: false },
        { name: 'Access', href: '#', current: false },
        { name: 'Demand', href: '#', current: false },
      ]

    return (
        <Container>
            <div className="relative z-10">
                <SearchBox action="/credentials" />
            </div>
            <div className="flex py-4 items-center text-xs">
                <ArrowRightStartOnRectangleIcon className="h-4 w-4 text-eqos-500 hover:text-eqos-600"/>
                <NavLink className="uppercase pl-1 pr-5 text-eqos-500 hover:text-eqos-600">Filter Options</NavLink>
                <p>* options selected</p>
            </div>
            <div className="z-0 mt-12">
                <SearchResults onSelect={onSelect} />
            </div>
            {selectedItem.value && (
                <SlideOver className="z-20" isActive={true} closeSlideOver={onClose}>
                    <DetailContent itemId={selectedItem.value} split="8/4" />
                </SlideOver>
            )}
            <Filter />
        </Container>
    );
}
