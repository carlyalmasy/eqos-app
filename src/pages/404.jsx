import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"

export default function NotFound() {
    return (
      <>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-eqos-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutrals-dark-500 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-neutrals-dark-100">Sorry, we couldn't find the page you're looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrimaryButton link="/" text="Go back home"/>
              <SecondaryButton link="#" text="Contact support &rarr;"/>
            </div>
          </div>
        </main>
      </>
    )
  }