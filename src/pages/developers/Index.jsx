// components
import Aside from "../../components/developer/Aside";
import CardAside from "../../layouts/CardAside";
import Markdown from "../../components/Markdown";

// content
import intro from "../../topics/Developer/DeveloperIntro.md";

export default function Developer() {
    return (
        <CardAside>
            <Markdown>{intro}</Markdown>
            <Aside />
        </CardAside>
    );
}
