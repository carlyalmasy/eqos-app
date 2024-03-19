import SearchResults from "../components/search/SearchResults.jsx";
import SearchBox from "../components/search/SearchBox.jsx";
import Markdown from "react-markdown";
import CredentialsIntro from "../topics/CredentialsIntro.md.js";
import Modal from "../components/Modal.jsx";
import DetailContent from "../components/detail/DetailContent.jsx";

export default function Credentials({data}) {
    return (
        <>
            <div className="my-10">
                <Markdown>{CredentialsIntro}</Markdown>
            </div>
            <SearchBox action="/credentials" />
            <div className="mt-12">
                <SearchResults />
            </div>
            <Modal content={ <DetailContent data={data} split="8/4"/> } />
        </>
    );
}
