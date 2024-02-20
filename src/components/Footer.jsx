import PageContainer from "../layouts/PageContainer";

export default function Footer() {
  const today = new Date();

  return (
    <>
      <footer className="bg-gray-200 flex">
        <PageContainer>
          <p className="flex-1">
            <a href="https://eqos.org/">EQOS.ORG</a>
          </p>
          <p className="flex-1">
            <a href="https://eqos.org/contact-us">CONTACT@EQOS.ORG</a>
          </p>
          <p className="flex-1">
              Copyright &copy; 2023 - {today.getFullYear()} EQOS
          </p>
        </PageContainer>
      </footer>
    </>
  )
}