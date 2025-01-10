// libraries / utilities
import debug from "../../utilities/debug.js";

//components
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import PaginationInfo from "./PaginationInfo.jsx";

export default function Pagination({ nPages, currentPage, totalItems, lastPgResult, firstPgResult }) {
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

    function scrollToTop() {
        debug("Unfocus");
        document.activeElement.blur();
        debug("Scroll to Top");
        window.scrollTo(0, 0);
    }

    const goToPrevPage = () => {
        currentPage.value !== 1 && currentPage.value--;
        scrollToTop();
    };

    const goToNextPage = () => {
        currentPage.value !== nPages.value && currentPage.value++;;
        scrollToTop();
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white py-8">
            <div className={
                totalItems == 0
                ? "invisible"
                : "flex flex-1 justify-between md:hidden"}
            >
                <a
                    onClick={goToPrevPage}
                    className={
                        currentPage == 1
                        ? "pointer-events-none relative inline-flex items-center rounded-md border border-neutrals-light-300 bg-white px-4 py-2 text-sm font-medium text-neutrals-light-500"
                        : "relative inline-flex items-center rounded-md border border-neutrals-light-400 bg-white px-4 py-2 text-sm font-medium text-neutrals-dark-400 hover:bg-neutrals-light-100"
                    }
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <PaginationInfo
                    firstPgResult={firstPgResult}
                    lastPgResult={lastPgResult}
                    totalItems={totalItems}
                />
                <a
                    onClick={goToNextPage}
                    className={
                        currentPage == nPages.value
                        ? "pointer-events-none relative inline-flex items-center rounded-md border border-neutrals-light-300 bg-white px-4 py-2 text-sm font-medium text-neutrals-light-500"
                        : "relative inline-flex items-center rounded-md border border-neutrals-light-400 bg-white px-4 py-2 text-sm font-medium text-neutrals-dark-400 hover:bg-neutrals-light-100"
                    }
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                <div>
                    <PaginationInfo
                        firstPgResult={firstPgResult}
                        lastPgResult={lastPgResult}
                        totalItems={totalItems}
                    />
                </div>
                <div className={
                        totalItems == 0
                        ? "invisible"
                        : ""
                    }
                >
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <a
                            onClick={goToPrevPage}
                            className={
                                currentPage == 1
                                ? "pointer-events-none relative inline-flex items-center rounded-l-md px-2 py-2 text-neutrals-light-500 ring-1 ring-inset ring-neutrals-light-300 focus:z-20 focus:outline-offset-0"
                                : "cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-neutrals-dark-400 ring-1 ring-inset ring-neutrals-light-400 hover:bg-neutrals-light-100 focus:z-20 focus:outline-offset-0"
                            }
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {
                            pageSets.map(
                                (pageSet, idx) => (
                                    <Fragment key={ idx }>
                                        {
                                            pageSet.map(
                                                (page) => (
                                                    <li className="flex" key={ page }>
                                                        <a
                                                            aria-current={currentPage.value == page && "page"}
                                                            onClick={() => {
                                                                currentPage.value != page.valueOf() && (currentPage.value = page.valueOf());
                                                                scrollToTop();
                                                            }}
                                                            className={
                                                                currentPage == page
                                                                    ? "cursor-pointer relative z-10 inline-flex items-center bg-eqos-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eqos-600"
                                                                    : "cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutrals-dark-400 ring-1 ring-inset ring-neutrals-light-400 hover:bg-neutrals-light-100 focus:z-20 focus:outline-offset-0"
                                                            }
                                                        >
                                                            {page}
                                                        </a>
                                                    </li>
                                                )
                                            )
                                        }
                                        {
                                            pageSets.length - 1 > idx
                                            ? (
                                                <span className="cursor-default relative inline-flex items-center px-4 py-2 text-sm font-semibold text-neutrals-dark-400 ring-1 ring-inset ring-neutrals-light-400 focus:outline-offset-0">
                                                    ...
                                                </span>
                                            )
                                            : ''
                                        }
                                    </Fragment>
                                )
                            )
                        }

                        <a
                            onClick={goToNextPage}
                            className={
                                currentPage == nPages.value
                                ? "pointer-events-none relative inline-flex items-center rounded-r-md px-2 py-2 text-neutrals-light-500  ring-1 ring-inset ring-neutrals-light-300 focus:z-20 focus:outline-offset-0"
                                : "cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-neutrals-dark-400 ring-1 ring-inset ring-neutrals-light-400 hover:bg-neutrals-light-100 focus:z-20 focus:outline-offset-0"
                            }
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
