import Container from "../layouts/Container"
import PrimaryButton from "../components/buttons/PrimaryButton"
import Fire from "../assets/images/404.gif"

export default function NotFound() {
    return (
      <Container>
        <main className="grid min-h-full place-items-center bg-white px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-eqos-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutrals-dark-500 sm:text-5xl">Page Not Found</h1>
            <p className="mt-6 text-base leading-7 text-neutrals-dark-100">Sorry, we couldn't find the page you're looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrimaryButton link="/" text="Go back home"/>
            </div>
            <span className="group inline-block hover:w-full">
                <svg className="w-4 h-4 m-auto my-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <img className="w-0 opacity-0 transition-opacity duration-1000 group-hover:w-[100vw] group-hover:opacity-100 rounded-xl" src={Fire} />
            </span>
          </div>
        </main>
      </Container>
    )
  }
