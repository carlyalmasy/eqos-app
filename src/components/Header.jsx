import PageContainer from "../layouts/PageContainer";
import PageBar from "./navigation/PageBar";
import navItems from "../topics/SiteNavigation";

export default function Header() {
  return (
    <>
      <header>
        <PageContainer>
          <PageBar items={navItems} />
        </PageContainer>
      </header>
    </>
  )
}