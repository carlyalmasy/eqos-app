import PageContainer from "../layouts/PageContainer";

export default function Footer() {
  const today = new Date();
  return (
    <footer className="bg-gray-200 mt-16">
      <PageContainer>
        <div className="max-w-7xl py-3 md:flex md:items-center md:justify-between text-sm text-gray-500">
          <div className="flex justify-center space-x-6">
            <p>
              <a href="https://eqos.org/">EQOS.ORG</a>
            </p>
            <p>
              <a href="https://eqos.org/contact-us">CONTACT@EQOS.ORG</a>
            </p>
          </div>
          <div className="mt-8 md md:mt-0">
            <p className="md:text-right sm:text-center">
              &copy; {today.getFullYear()} EQOS
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

    