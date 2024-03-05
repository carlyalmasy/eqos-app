import Markdown from '../components/Markdown.jsx';
import Intro from '../topics/Intro.md.js';
import DataIntro from '../topics/DataIntro.md.js';
import SearchBox from '../components/SearchBox.jsx';

// Discovery Shorcuts Deps

import ShortcutsIntro from '../topics/ShortcutsIntro.md.js'
import ShortcutsIcon from '../components/icons/ShortcutsIcon.jsx';
import ShortcutGroup from '../components/lists/ShortcutGroup.jsx';
import DiscoveryShortcuts from '../topics/DiscoveryShortcuts.js';
import Grid from '../components/layout/Grid.jsx';

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-12 grid-rows-none gap-16">
          <div className="md:col-span-6 mt-6">
            <Markdown>
              {Intro}
            </Markdown>
          </div>
          <div className="md:col-span-6">
            <SearchBox />
          </div>
          <div className="md:col-span-8">
            <Markdown>
              {DataIntro}
            </Markdown>
            <Grid split="2">
              <img src="https://placehold.co/600x335?text=1" />
              <img src="https://placehold.co/600x335?text=2" />
              <img src="https://placehold.co/600x335?text=3" />
              <img src="https://placehold.co/600x335?text=4" />
            </Grid>
          </div>
          <div className="md:col-span-4">
            <Markdown>
              {ShortcutsIntro}
            </Markdown>
            <ShortcutGroup icon={ ShortcutsIcon } groups={ DiscoveryShortcuts } />
          </div>
      </div>
    </>
  )
}
