import PageContainer from "../layouts/PageContainer";
import PageBar from "./navigation/PageBar";
import navItems from "../topics/SiteNavigation";

export default function Header() {
  return (
    <>
      <header
      className="shadow sticky top-0 bg-white z-[999]"
      >
        <PageContainer>
          <PageBar items={navItems} />
        </PageContainer>
      </header>
    </>
  )
}