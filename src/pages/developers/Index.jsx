// components
import Aside from "../../components/developers/Aside";
import CardAside from "../../layouts/CardAside";
import Markdown from "../../components/Markdown";
import SubHeader from "../../components/developers/navigation/SubHeader";

// content
import subNavItems from "../../topics/developers/Navigation.md"
import intro from "../../topics/developers/DeveloperIntro.md";

export default function Developer() {
    return (
        <>
        <SubHeader items={subNavItems} />
        <CardAside>
            <Markdown>{intro}</Markdown>
            <Aside />
        </CardAside>
        </>

    );
}
