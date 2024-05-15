// components
import SubPageBar from "./SubPageBar"

// content
import subNavItems from "../../../topics/developers/Navigation.md"

export default function SubHeader() {
  return (
    <>
      <header
      className="top-0 bg-white z-[999]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-">
          <SubPageBar items={subNavItems} />
        </div>
      </header>
    </>
  )
}
