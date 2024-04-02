import SearchResults from "../components/search/SearchResults.jsx";
import SearchBox from "../components/search/SearchBox.jsx";
import Markdown from "react-markdown";
import CredentialsIntro from "../topics/Credentials/CredentialsIntro.md.js";
import SlideOver from "../components/SlideOver.jsx";
import DetailContent from "../components/detail/DetailContent.jsx";
import { useSignal } from "@preact/signals-react";

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
        <>
            <Markdown>{CredentialsIntro}</Markdown>
            <div className="@container">
                <SearchBox action="/credentials" />
            </div>
            <div className="mt-12">
                <SearchResults onSelect={onSelect} />
            </div>
            {selectedItem.value && (
                <SlideOver isActive={true} closeSlideOver={onClose}>
                    <DetailContent itemId={selectedItem.value} split="8/4" />
                </SlideOver>
            )}
        </>
    );
}
