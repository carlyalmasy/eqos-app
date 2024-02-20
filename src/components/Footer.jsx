import PageContainer from "../layouts/PageContainer";

export default function Footer() {
  const today = new Date();
  return (
    <footer className="bg-gray-200 mt-16">
      <PageContainer>
        <div className="grid grid-cols-12 grid-rows-1 gap-4 text-sm text-gray-500 py-3">
          <div>
            <p>
              <a href="https://eqos.org/">EQOS.ORG</a>
            </p>
          </div>
          <div>
            <p>
              <a href="https://eqos.org/contact-us">CONTACT@EQOS.ORG</a>
            </p>
          </div>
          <div className="col-span-10 text-right">
            <p>&copy; 2023 - {today.getFullYear()} EQOS</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

    