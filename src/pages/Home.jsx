import Markdown from "../components/Markdown.jsx";
import Intro from "../topics/Home/Intro.md.js";
import SearchBox from "../components/search/SearchBox.jsx";
import Grid from "../components/layout/Grid.jsx";

// Data Visualization Deps
import DataIntro from "../topics/Home/DataIntro.md.js";
import Chart from "../components/Chart.jsx";
import Occupations from "../topics/Charts/Occupations.json";
import Categories from "../topics/Charts/Categories.json"
import Providers from "../topics/Charts/Providers.json";
import Skills from "../topics/Charts/Skills.json"

// Discovery Shorcuts Deps
import ShortcutsIntro from "../topics/Home/ShortcutsIntro.md.js";
import ShortcutsIcon from "../components/icons/ShortcutsIcon.jsx";
import ShortcutGroup from "../components/lists/ShortcutGroup.jsx";
import DiscoveryShortcuts from "../topics/Home/DiscoveryShortcuts.js";

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-12 gap-8 md:gap-12">
                <div className="col-span-12 lg:col-span-6 lg:mb-18 lg:mr-8">
                    <Markdown>{Intro}</Markdown>
                </div>
                <div className="bg-neutrals-light-100 rounded-md drop-shadow-md p-8 col-span-12 lg:col-span-6">
                    <SearchBox action="/credentials" />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:mr-8">
                    <Markdown>{DataIntro}</Markdown>
                    <Grid split="2"  gapSize="8">
                        <Chart data={Occupations}/>
                        <Chart data={Categories}/>
                        <Chart data={Providers}/>
                        <Chart data={Skills}/>
                    </Grid>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Markdown>{ShortcutsIntro}</Markdown>
                    <ShortcutGroup icon={ShortcutsIcon} groups={DiscoveryShortcuts} />
                </div>
            </div>
        </>
    );
}
