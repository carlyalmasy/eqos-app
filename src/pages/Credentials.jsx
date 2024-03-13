import SearchResults from "../components/search/SearchResults.jsx";
import SearchBox from "../components/search/SearchBox.jsx";
import Markdown from "react-markdown";
import CredentialsIntro from "../topics/CredentialsIntro.md.js";

export default function Credentials() {
    return (
        <>
            <div className="my-10">
                <Markdown>{CredentialsIntro}</Markdown>
            </div>
            <SearchBox action="/credentials" />
            <div className="mt-12">
                <SearchResults />
            </div>
        </>
    );
}
