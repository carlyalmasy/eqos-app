import PageContainer from "../layouts/PageContainer";

export default function Footer() {
  const today = new Date();

  return (
    <>
      <footer className="bg-gray-200">
        <PageContainer>
          <p>
              Copyright &copy; 2023 - {today.getFullYear()} EQOS
          </p>
        </PageContainer>
      </footer>
    </>
  )
}