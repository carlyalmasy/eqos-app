export default function Footer() {
    const today = new Date();
    return (
        <footer className="bg-neutrals-light-200 absolute w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:flex md:items-center md:justify-between text-sm uppercase">
                <div className="flex justify-center space-x-6">
                    <a
                        className=" text-neutrals-dark-100 hover:text-neutrals-dark-500 hover:underline"
                        href="https://eqos.org/"
                        target="_blank"
                    >
                        EQOS.org
                    </a>
                    <a className=" text-neutrals-dark-100 hover:text-neutrals-dark-500 hover:underline" href="mailto:info@eqos.org" target="_blank">
                        info@EQOS.org
                    </a>
                </div>
                <div className="mt-0">
                    <p className="text-neutrals-dark-100 md:text-right text-center">&copy; {today.getFullYear()} EQOS</p>
                </div>
            </div>
        </footer>
    );
}
