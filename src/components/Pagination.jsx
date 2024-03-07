import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

export default function Pagination({ nPages, currentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const pageSets    = Array();

    if (nPages <= 10) {
        pageSets.push(pageNumbers);
    } else {
        let firstSet = pageNumbers.slice(0, 4);
        let lastSet  = pageNumbers.slice(-4);
        let curSet   = Array();

        if (currentPage.value >= 4 && currentPage.value <= nPages - 3) {
            curSet   = pageNumbers.slice(currentPage.value - 2, currentPage.value + 1)
            firstSet = firstSet.filter(x => !curSet.includes(x));
            lastSet  = lastSet.filter(x => !curSet.includes(x));

            firstSet.splice(-1);
            lastSet.splice(0, 1);
        }

        if (firstSet.length) {
            pageSets.push(firstSet);
        }

        if (curSet.length) {
            pageSets.push(curSet);
        }

        if (lastSet.length) {
            pageSets.push(lastSet);
        }
    }

    const goToNextPage = () => {
        currentPage !== nPages && currentPage.value++;
    };
    const goToPrevPage = () => {
        currentPage !== 1 && currentPage.value--;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    onClick={goToPrevPage}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={goToNextPage}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    {/* <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium"></span> results
                    </p> */}
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <a
                            href="#"
                            onClick={goToPrevPage}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {
                            pageSets.map(
                                (pageSet, idx) => (
                                    <>
                                        {
                                            pageSet.map(
                                                (page) => (
                                                    <li className="flex" key={page}>
                                                        <NavLink
                                                            aria-current={`page-item ${currentPage == page && "page"}`}
                                                            onClick={() => (currentPage.value = page.valueOf())}
                                                            className={`page-item ${
                                                                currentPage == page
                                                                    ? "relative z-10 inline-flex items-center bg-eqos-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                            } `}
                                                            to="#"
                                                        >
                                                            {page}
                                                        </NavLink>
                                                    </li>
                                                )
                                            )
                                        }
                                        {
                                            pageSets.length - 1 > idx
                                            ? (
                                                <span key={idx * 10000} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                                    ...
                                                </span>
                                            )
                                            : ''
                                        }
                                    </>
                                )
                            )
                        }

                        <a
                            href="#"
                            onClick={goToNextPage}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
