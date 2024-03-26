import Markdown from "../components/Markdown.jsx";
import Intro from "../topics/Intro.md.js";
import DataIntro from "../topics/DataIntro.md.js";
import Card from "../components/Card.jsx";
import SearchBox from "../components/search/SearchBox.jsx";
import Grid from "../components/layout/Grid.jsx";

// Discovery Shorcuts Deps

import ShortcutsIntro from "../topics/ShortcutsIntro.md.js";
import ShortcutsIcon from "../components/icons/ShortcutsIcon.jsx";
import ShortcutGroup from "../components/lists/ShortcutGroup.jsx";
import DiscoveryShortcuts from "../topics/DiscoveryShortcuts.js";

export default function Home() {
    return (
        <>
            <div className="grid lg:grid-cols-12 grid-rows-none gap-4">
                <div className="md:col-span-6 mt-8 mr-12 flex shrink-1">
                    <Markdown>{Intro}</Markdown>
                </div>
                <div className="md:col-span-6 mt-12">
                    <Card color="platinum-100">
                        <div className="p-8 px-8">
                            <SearchBox action="/credentials" />
                        </div>
                    </Card>
                </div>
                <div className="md:col-span-8">
                    <Markdown>{DataIntro}</Markdown>
                    <Grid split="2" gapSize="6">
                        <img src="https://placehold.co/600x335?text=1" />
                        <img src="https://placehold.co/600x335?text=2" />
                        <img src="https://placehold.co/600x335?text=3" />
                        <img src="https://placehold.co/600x335?text=4" />
                    </Grid>
                </div>
                <div className="md:col-span-4 ml-12">
                    <Markdown>{ShortcutsIntro}</Markdown>
                    <ShortcutGroup icon={ShortcutsIcon} groups={DiscoveryShortcuts} />
                </div>
            </div>
        </>
    );
}
