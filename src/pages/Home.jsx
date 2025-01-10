// components
import Container from "../layouts/Container";
import Grid from "../components/layout/Grid";
import Markdown from "../components/Markdown";
import SearchBox from "../components/credentials/search/SearchBox";

// content
import intro from "../topics/home/Intro.md.js";

// Data Visualization Deps
// components
import Chart from "../components/Chart";
import Occupations from "../topics/charts/Occupations.json";
import Categories from "../topics/charts/Categories.json"
import Providers from "../topics/charts/Providers.json";
import Skills from "../topics/charts/Skills.json"
//content
import data from "../topics/home/DataIntro.md.js";

// Discovery Shorcuts Deps
// components
import ShortcutsIcon from "../components/icons/ShortcutsIcon";
import ShortcutGroup from "../components/lists/ShortcutGroup";
import DiscoveryShortcuts from "../topics/home/DiscoveryShortcuts.js";
// content
import shortcuts from "../topics/home/ShortcutsIntro.md.js";

export default function Home() {
    return (
        <Container>
            <div className="grid grid-cols-12 gap-8 md:gap-12">
                <div className="col-span-12 lg:col-span-6 lg:mb-18 lg:mr-8">
                    <Markdown>{intro}</Markdown>
                </div>
                <div className="bg-neutrals-light-100 rounded-md drop-shadow-md p-8 col-span-12 lg:col-span-6">
                    <SearchBox action="/credentials" />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:mr-8">
                    <Markdown>{data}</Markdown>
                    <Grid split="2"  gapSize="8">
                        <Chart data={Occupations}/>
                        <Chart data={Categories}/>
                        <Chart data={Providers}/>
                        <Chart data={Skills}/>
                    </Grid>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <Markdown>{shortcuts}</Markdown>
                    <ShortcutGroup icon={ShortcutsIcon} groups={DiscoveryShortcuts} />
                </div>
            </div>
        </Container>
    );
}
