import PageContainer from "../layouts/PageContainer";

export default function Footer() {
  const today = new Date();
  return (
    <footer className="bg-neutrals-light-200 mt-16">
      <PageContainer>
        <div className="py-3 md:flex md:items-center md:justify-between text-sm text-neutrals-dark-200 uppercase">
          <div className="flex justify-center space-x-6">
            <p>
              <a
                className="hover:text-neutrals-dark-600"
                href="https://eqos.org/"
                target="_blank"
                >EQOS.org</a>
            </p>
            <p>
              <a
                className="hover:text-neutrals-dark-600"
                href=""
                target="_blank"
              >contact@EQOS.org</a>
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

