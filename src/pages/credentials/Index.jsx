// hooks
import { useSignal } from "@preact/signals-react";

// components
import DetailContent from "../../components/credentials/detail/DetailContent.jsx";
import SearchBox from "../../components/credentials/search/SearchBox.jsx";
import SearchResults from "../../components/credentials/search/SearchResults.jsx";
import SlideOver from "../../components/layout/SlideOver.jsx";
import Container from "../../layouts/Container.jsx";

export default function Credentials({}) {

    const selectedItem = useSignal(null);

    const onClose = function (e) {
        selectedItem.value = "";
    };

    const onSelect = function (e, item) {
        e.preventDefault();
        selectedItem.value = item.id;
    };

    return (
        <Container>
            <div className="relative z-10">
                <SearchBox action="/credentials" />
            </div>
            <div className="z-0 mt-12">
                <SearchResults onSelect={onSelect} />
            </div>
            {selectedItem.value && (
                <SlideOver className="z-20" isActive={true} closeSlideOver={onClose}>
                    <DetailContent itemId={selectedItem.value} split="8/4" />
                </SlideOver>
            )}
        </Container>
    );
}
