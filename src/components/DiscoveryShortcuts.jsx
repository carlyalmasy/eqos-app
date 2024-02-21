import ShortcutsIcon from "./items/ShortcutsIcon"

export default function DiscoveryShortcuts() {
    return (
        <>
            <h4>
              In-Demand Occupations
            </h4>
            <ul>
              <li className="flex">
                <ShortcutsIcon />
                Cyber Security
              </li>
              <li className="flex">
                <ShortcutsIcon />
                Healthcare
              </li>
              <li className="flex">
                <ShortcutsIcon />
                Software Development
              </li>
            </ul>
            <h4>
              Most Popular Training Programs
            </h4>
            <ul>
              <li className="flex">
                <ShortcutsIcon />
                Project Management
              </li>
              <li className="flex">
                <ShortcutsIcon />
                UX Design
              </li>
              <li className="flex">
                <ShortcutsIcon />
                IT Support
              </li>
            </ul>
            <h4>
              Top Providers
            </h4>
            <ul>
              <li className="flex">
                <ShortcutsIcon />
                Udemy
              </li>
              <li className="flex">
                <ShortcutsIcon />
                Coursera
              </li>
              <li className="flex">
                <ShortcutsIcon />
                Microsoft
              </li>
            </ul>            
      </>
    )
  }