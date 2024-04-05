import PageContainer from "../../layouts/Container";
import PageBar from "./navigation/PageBar";
import navItems from "../../topics/SiteNavigation";

export default function Header() {
  return (
    <>
      <header
      className="shadow sticky top-0 bg-white z-[999]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageBar items={navItems} />
        </div>
      </header>
    </>
  )
}
