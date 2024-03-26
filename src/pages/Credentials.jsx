import SearchResults from "../components/search/SearchResults.jsx";
import SearchBox from "../components/search/SearchBox.jsx";
import Markdown from "react-markdown";
import CredentialsIntro from "../topics/CredentialsIntro.md.js";
import Modal from "../components/Modal.jsx";
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
            <div className="my-10">
                <Markdown>{CredentialsIntro}</Markdown>
            </div>
            <SearchBox action="/credentials" />
            <div className="mt-12">
                <SearchResults onSelect={onSelect} />
            </div>
            {selectedItem.value && (
                <Modal isActive={true} closeModal={onClose}>
                    <DetailContent itemId={selectedItem.value} split="8/4" />
                </Modal>
            )}
        </>
    );
}
