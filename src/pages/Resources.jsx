import Markdown from "../components/Markdown.jsx";
import PageHeight from "../layouts/PageHeight.jsx";
import ResourcesIntro from "../topics/ResourcesIntro.md.js";

export default function Resources() {
    return (
        <>
            <PageHeight>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="min-w-0 flex-1">
                        <Markdown>{ResourcesIntro}</Markdown>
                    </div>
                </div>
            </PageHeight>
        </>
    );
}
